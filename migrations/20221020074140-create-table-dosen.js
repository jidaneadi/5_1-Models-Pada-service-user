'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dosen', {
      id_dosen: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nama_dosen:{
        type: Sequelize.STRING,
        allowNull: false
      },
      nip:{
        type:Sequelize.INTEGER,
        allowNull: true
      },
      alamat:{
        type: Sequelize.STRING,
        allowNull: true
      },
      no_telp:{
        type: Sequelize.INTEGER,
        allowNull: true
      },
    });
    await queryInterface.addConstraint('dosen',{
      type: 'unique',
      fields: ['nip'],
      name: 'UNIQUE_NIP'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('dosen');
  }
};

