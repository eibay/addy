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

const getFriends = (id) => {
  const db = ls.get('users');
  user = db.users.filter((user) => (user.id === id));
  return user[0].addressBook[0].friends;
};

module.exports = {
  getFriends,
  getUsers,
  getUser,
};