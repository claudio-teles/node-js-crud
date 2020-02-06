'use strict';

const md5 = require('../encrypt/md5');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('admins', [
      {
        email: 'email@adm_um.com.br',
        senha: md5('Senha[Adm_1]'),
        login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'email@adm_dois.com.br',
        senha: md5('Senha[Adm_2]'),
        login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'email@adm_tres.com.br',
        senha: md5('Senha[Adm_3]'),
        login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'email@adm_quatro.com.br',
        senha: md5('Senha[Adm_4]'),
        login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'email@adm_cinco.com.br',
        senha: md5('Senha[Adm_5]'),
        login: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {}
};
