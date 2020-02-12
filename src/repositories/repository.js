'use strict';
/*
C => Crate
R => Read
U => Update
D => Delete
*/
const Model = require('../models/ModelName');

//create
exports.create = async data => {
  const {name, description} = data;

  const res = await Model.create({
    name,
    description
  });

  return res;
};

//read
exports.get = async () => {
  const res = await Model.findAll();
  return res;
};

exports.getById = async id => {
  const res = await Model.findByPk(id);
  return res;
};

//update
exports.update = async (id, data) => {
  const { name, description} = data;

  const res = await Model.update({
    name,
    description
  },{
    where:{
      id
    }
  })

  return res;
};

//delete
exports.delete = async id => {
  const res = await Model.destroy(id);
  return res;
};
