'use strict'

const booksTemplate = require('./templates/button-response.handlebars')

const getBooksSuccess = (responseData) => {
  const booksHtml = booksTemplate({ books: responseData.books })
  $('#show-books').html = booksHtml
}

const getBooksFailure = (responseData) => {
  const message = 'Something went wrong, please try again.'
  $('#user-message').html = message
}

module.exports = {
  getBooksSuccess,
  getBooksFailure
}
