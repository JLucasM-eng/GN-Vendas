'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('purchases',{
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      nome_comprador:{
        type:Sequelize.TEXT,
      },
      cpf_comprador:{
        type:Sequelize.TEXT,
      },
      telefone_comprador:{
        type:Sequelize.TEXT,
      },
      link_pdf:{
        type:Sequelize.TEXT,
      },
      boleto_id:{
        type:Sequelize.BIGINT,
      },

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('purchases')
  }
};
