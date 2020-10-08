const Joi = require('joi');
const express = require('express');
const hash = require('object-hash');
const url = require('url');
const router = express.Router();
const {getUsers, getUser, getFriends,getFriendsById, postUser} = require('../helper/db');


router.get('/compare', (req, res) => {
  const {name1, name2} = url.parse(req.url,true).query;
  const f1 = getFriends(name1);
  const f2 = getFriends(name2);
  const f1Set = new Set(f1.map(({name}) => name));
  const f2Set = new Set(f2.map(({name}) => name));
  const diff1 = f2.filter(({name}) => !f1Set.has(name));
  const diff2 = f1.filter(({name}) => !f2Set.has(name));
  const diff = [...diff1, ...diff2];
  res.send(diff);
});

router.get('/:id/friends', (req, res) => {
  const friends = getFriendsById(req.params.id);
  res.send(friends);
});

router.get('/', (req, res) => {
  const users = getUsers();
  res.send(users);
});

router.get('/:id', (req, res) => {
  res.send(getUser(req.params.id));
});


router.post('/', (req, res) => {
  const {error} = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const nameHash = req.body.name;
  const phoneHash = req.body.phone;
  const user = {
    id: hash({nameHash: phoneHash}),
    name: req.body.name,
    phone: req.body.phone,
    friends: req.body.friends
  }
  try {
    postUser(user);
    res.send(user);
  } catch (error) {
    res.send("Error when posting user:", error);    
  };
});

function validateUser(user) { 
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    phone: Joi.string().min(10).required()
  })

  return schema.validate(user);
}

module.exports = router;