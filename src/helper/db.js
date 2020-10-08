const db_data = require('../../db/data.json');
const ls = require('local-storage')
ls('users', db_data);

const getUsers = () => {
  const users = ls.get('users');
  return users;
};

const getUser = (id) => {
  const db = ls.get('users');
  const user = db.users.filter((user) => (user.id === id));
  return user;
};

const postUser = (user) => {
  const db = ls.get('users');
  db.users.push(user);
  ls('users', db);
};

const getFriends = (name) => {
  const db = ls.get('users');
  user = db.users.filter((user) => (user.name === name));
  return user[0].friends;
};

const addFriend = (id, friend) => {
  const db = ls.get('users');
  user = db.users.filter((user) => (user.id === id));
  user.friends.push(friend);
}

module.exports = {
  getFriends,
  getUsers,
  getUser,
  postUser,
};