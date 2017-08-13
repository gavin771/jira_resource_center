import express from 'express'
import path from 'path'
import formidable from 'formidable'

const app = express()

app.use(express.static(path.join(__dirname, '../', 'build')))

app.get('/*', (req, res) => {
  console.log('any request')
  console.log(path.join(__dirname, '../', 'build', 'index.html'))
  res.sendFile(path.join(__dirname, '../', 'build', 'index.html'))
})

app.post('/upload', (req, res) => {
  var form = new formidable.IncomingForm()

  form.parse(req)
  form.on('fileBegin', (name, file) => {
    file.path = path.join(`${__dirname}/uploads/${file.name}`)
  })

  form.on('file', (name, file) => {
    console.log(`Uploaded file ${file.name}`)
  })

  res.sendFile(`${__dirname}/index.html`)
})

app.listen(3001)

console.log(`Resource center listening on 3001`)
