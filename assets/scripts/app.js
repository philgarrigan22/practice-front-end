'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const api = require('./api')
const ui = require('./ui')

const onClickGetBooks = (event) => {
  api.getBooks().then(ui.getBooksSuccess).catch(ui.getBooksFailure)
}

$(() => {
  $('#get-books').on('click', onClickGetBooks)
})
