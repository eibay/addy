const {json} = require('express');
const fs = require('fs');
const data = require('../../db/data.json');

const getData = () => (data.data);

module.exports = {
  getData: getData
};