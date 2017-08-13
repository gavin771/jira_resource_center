import express from 'express'
import path from 'path'
import formidable from 'formidable'
import fs from 'fs'

const app = express()

app.use(express.static(path.join(__dirname, '../', 'build')))

app.post('/uploads', (req, res) => {
  var form = new formidable.IncomingForm()

  if (!fs.existsSync(`${__dirname}/uploads`)) {
    fs.mkdirSync(`${__dirname}/uploads`)
  }

  form.parse(req)

  form.on('fileBegin', (name, file) => {
    file.path = path.join(`${__dirname}/uploads/${file.name}`)
  })

  form.on('file', (name, file) => {
    console.log(`Uploaded file ${file.name}`)
  })

  res.status(200).json({ msg: 'Form successfully completed' })
})

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
})

app.listen(3001)

console.log(`Resource center listening on 3001`)
