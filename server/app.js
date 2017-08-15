import express from 'express'
import path from 'path'
import formidable from 'formidable'
import fs from 'fs'
import * as trello from './trello'

require('dotenv').config()
const helper = require('sendgrid').mail

/** App configuration */
const SERVER_PORT = process.env.SERVER_PORT || 3001
const PROTOCOL = process.env.PROTOCOL || 'http'
const HOSTNAME = process.env.HOSTNAME || 'localhost'
const CLIENT_PORT = process.env.CLIENT_PORT || 3000
const CORS =
  process.env.NODE_ENV === 'production'
    ? `${PROTOCOL}://${HOSTNAME}`
    : `${PROTOCOL}://${HOSTNAME}:${CLIENT_PORT}`

/** Sendgrid configuration */
const fromEmail = new helper.Email('test@example.com')
const toEmail = new helper.Email('gavin.samuels10@gmail.com')
const subject = 'Sending with SendGrid is Fun'
const content = new helper.Content(
  'text/plain',
  'and easy to do anywhere, even with Node.js'
)
const mail = new helper.Mail(fromEmail, subject, toEmail, content)
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY)
const request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON()
})

const app = express()
app.use(express.static(path.join(__dirname, '../', 'build')))

app.post('/uploads', (req, res) => {
  const form = new formidable.IncomingForm()
  let uploadedFile = {}

  res.header('Access-Control-Allow-Origin', CORS)
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  /** Create the upload folder if it doesnt exist */
  if (!fs.existsSync(`${__dirname}/uploads`)) {
    fs.mkdirSync(`${__dirname}/uploads`)
  }

  /** Parse the form */
  form.parse(req)

  form.on('fileBegin', (name, file) => {
    file.path = path.join(`${__dirname}/uploads/${file.name}`)
    uploadedFile.path = file.path
  })

  /** If the form has any files */
  form.on('file', (name, file) => {
    console.log(`Uploaded file ${file.name}`)
    uploadedFile.file = file
  })

  /** If the form has any fields */
  form.on('field', (filed, value) => {})

  let error = false
  form.on('error', err => {
    error = true

    console.log(err)
    res.status(400).json({ success: false, msg: 'Error submitting form' })
  })

  form.on('end', (name, file) => {
    if (error) return

    if (process.env.ENABLE_SEND_EMAILS === 'true') {
      console.log('sending emails')
      sg.API(request, function (error, response) {
        if (error) {
          console.log('Error response received')
        }
      })
    }

    if (process.env.ENABLE_TRELLO === 'true') {
      trello
        .createCard({ title: 'card title', description: 'description' })
        .then(card => {
          if (uploadedFile) {
            trello
              .addAttachment(card.id, uploadedFile)
              .then(card => {
                console.log(card)
              })
              .catch(err => {
                console.log('attach file error')
                console.log(err)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    }

    res.status(200).json({ success: true, msg: 'Form successfully completed' })
  })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
})

app.listen(SERVER_PORT)

console.log(`Resource center listening on 3001`)
