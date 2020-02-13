'use strict';
/*
C => Crate
R => Read
U => Update
D => Delete
*/
const Model = require('../models/ModelName');

module.exports = {
  //create
  async create(data){
    const {name, description} = data;

    const res = await Model.create({
      name,
      description
    });

    return res;
  },
  //read
  async get() {
    const res = await Model.findAll();
    return res;
  },

  async getById(id){
    const res = await Model.findByPk(id);
    return res;
  },

  //update
  async update(id, data){
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
  },

  //delete
  async delete(id) {
    const res = await Model.destroy({
      where:{
        id
      }
    });
    return res;
  }
}
