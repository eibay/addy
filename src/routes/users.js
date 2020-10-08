const Joi = require('joi');
const express = require('express');
const router = express.Router();
const {getUsers, getFriends, getUser} = require('../helper/db');

router.get('/', (req, res) => {
  const users = getUsers();
  console.log('typeof:', typeof(users));
  res.send(users);
});

router.get('/:id', (req, res) => {
  res.send(getUser(req.params.id));
});

router.get('/:id/friends', (req, res) => {
  res.send(getFriends(req.params.id));
});

module.exports = router;