const Joi = require('joi');
const express = require('express');
const router = express.Router();
const {getBooks, getBook} = require('../helper/db');

router.get('/', (req, res) => {
  const data = getBooks();
  res.send(data);
});

router.get('/:id', (req, res) => {
  const book = getBook(req.params.id);
  console.log('book:', book);
  res.send(book);
})

module.exports = router;