'use strict';

const repository = require('../repositories/repository');
const response = require('../util/response');

module.exports = {
  async index(req, res){
    try {
      const models = await repository.get();
      return res.status(200).send(models);
    } catch (error) {
      return res
        .status(400)
        .send(
          response(
            error,
            'Ocorreu um problema ao tentar listar os dados'
          )
        );
    }
  },
  async store(req, res){
    try {
      const model = await repository.create(req.body);
      return res.status(200).send(response(model,'Cadastro realizado com sucesso'));
    } catch (error) {
      return res
        .status(400)
        .send(
          response(
            error,
            'Ocorreu um problema ao tentar criar um novo registro'
          )
        );
    }
  },
  async update(req, res){
    try {
      const { id } = req.params;
      const { body:data } = req;

      const exists = await repository.getById(id);

      if(!exists){
        return res.status(400).send(response(null, 'Registro não encontrado'));
      }

      await repository.update(id, data);

      return res.status(200).send(response(null, 'Atualizado com sucesso'))

    } catch (error) {
      return res
        .status(400)
        .send(
          response(
            error,
            'Ocorreu um problema ao tentar atualizar o registro'
          )
        );
    }
  },
  async delete(req, res){
    try {
      const { id } = req.params;

      const exists = await repository.getById(id);

      if(!exists){
        return res.status(400).send(response(null, 'Registro não encontrado'));
      }

      const model = await repository.delete(id);

      return res.status(200).send(response(model, 'Apagado com sucesso'));
    } catch (error) {
      console.log(error);
      return res
        .status(400)
        .send(
          response(
            error,
            'Ocorreu um problema ao tentar apagar o registro'
          )
        );
    }
  }
}
