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

const getFriendsById = (id) => {
  const db = ls.get('users');
  user = db.users.filter((user) => (user.id === id));
  const sortedFriends = user[0].friends.sort(compare);
  return sortedFriends;
};

const compare = (a, b) => {
  const friendA = a.name.toUpperCase();
  const friendB = b.name.toUpperCase();

  let comparison = 0;
  if (friendA > friendB) {
    comparison = 1;
  } else if (friendA < friendB) {
    comparison = -1;
  }
  return comparison; // to reverse: comparison * -1;
}

const addFriend = (id, friendId) => {
  const db = ls.get('users');
  const friendToAdd = getUser(friendId)[0];
  const friend = {id: friendToAdd.id, name: friendToAdd.name, phone: friendToAdd.phone};
  const user = (db.users.filter((user) => (user.id === id)))[0];
  user.friends = [...user.friends, friend];
  db.users = [...db.users, user];
  ls('users', db.users);
  const name = user.name;
  return {friend, name};
}

module.exports = {
  getFriends,
  getFriendsById,
  addFriend,
  getUsers,
  getUser,
  postUser,
};