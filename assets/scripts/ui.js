'use strict'

const MSG_ELEM = '#show-books'
const BOOKS_ELEM = '#user-message'

const booksTemplate = require('./templates/button-response.handlebars')

const getBooksSuccess = (responseData) => {
  const booksHtml = booksTemplate(responseData.books)
  $(BOOKS_ELEM).html = booksHtml
}

const getBooksFailure = (responseData) => {
  const message = 'Something went wrong, please try again.'
  $(MSG_ELEM).html = message
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
