/** APIS for Trello */
/** Get a board, given an id /boards/{id} */
/** Create a board  /boards/ */
/** Get boards for a user /members/{id}/boards */
/** Get lists /boards/{id}/lists */
/** Create lists /boards/{id}/lists */
/** Add cards to lists /cards */
import Trello from 'trello'
import FormData from 'form-data'
import fs from 'fs'
import request from 'request'

require('dotenv').config()
const formData = new FormData()
const TRELLO_API_KEY = process.env.TRELLO_API_KEY
const TRELLO_TOKEN = process.env.TRELLO_TOKEN
const trello = new Trello(TRELLO_API_KEY, TRELLO_TOKEN)
let LIST_ID = '599119f8a095d017b72634ca'
// let BOARD_ID = '599110ec6ccb9c2e74f4efec'

let createCard = cardData => {
  return new Promise((resolve, reject) => {
    trello
      .addCard(cardData.title, cardData.description, LIST_ID)
      .then(card => {
        resolve(card)
      })
      .catch(err => {
        console.log(err)
        if (err === 'could not find the board that the card belongs to') {
          // try to create the board, then create the card again
        } else {
          reject(err)
        }
      })
  })
}

let addAttachment = (cardId, uploadedFile) => {
  return new Promise((resolve, reject) => {
    formData.append('key', TRELLO_API_KEY)
    formData.append('token', TRELLO_TOKEN)
    formData.append('file', fs.createReadStream(uploadedFile.path))

    var requestObj = request.post(
      'https://trello.com/1/cards/' + cardId + '/attachments',
      attachmentCallback
    )
    requestObj._form = formData

    function attachmentCallback (err, httpResponse, body) {
      if (httpResponse.statusCode === 200) {
        console.log('successfully attached the file ')
        resolve(body)
      } else {
        console.log(
          'Could not attach the file to card:',
          httpResponse.statusMessage
        )
        reject(err)
      }
    }
  })
}

module.exports.createCard = createCard
module.exports.addAttachment = addAttachment
