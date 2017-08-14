/** APIS for Trello */
/** Get a board, given an id /boards/{id} */
/** Create a board  /boards/ */
/** Get boards for a user /members/{id}/boards */
/** Get lists /boards/{id}/lists */
/** Create lists /boards/{id}/lists */
/** Add cards to lists /cards */
import Trello from 'trello'

require('dotenv').config()
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

let addAttachment = (cardId, file) => {
  return new Promise((resolve, reject) => {
    trello
      .makeRequest('post', `/1/cards/${cardId}/attachments`, {
        name: file.name,
        mimeType: file.type,
        file: file,
        webhooks: true
      })
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports.createCard = createCard
module.exports.addAttachment = addAttachment
