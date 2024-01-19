'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {
          nome: 'Solange Estudante',
          email: 'solange@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Igor Estudante',
          email: 'igor@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Aline Estudante',
          email: 'aline@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Fernando Estudante',
          email: 'fernando@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Ricardo Docente',
          email: 'ricardo@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: 'Dine Docente',
          email: 'dine@email.com',
          senha: 'teste123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
