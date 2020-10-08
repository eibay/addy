const db = require('../../db/data.json');

const getUsers = () => {
  console.log('db:getUsers:', db.users);
  return db.users;
};

const getUser = (id) => {
  const user = db.users.filter((user) => (user.id === id));
  return user;
};

const getFriends = (id) => {
  user = db.users.filter((user) => (user.id === id));
  return user[0].addressBook[0].friends;
};

module.exports = {
  getFriends,
  getUsers,
  getUser,
};