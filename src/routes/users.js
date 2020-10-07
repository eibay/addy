const Joi = require('joi');
const express = require('express');
const router = express.Router();
const {getData} = require('../helper/db');

router.get('/', (req, res) => {
  const data = getData();
  res.send(data.book1);
});

module.exports = router;