'use strict';
// const bcrypt = require('bcrypt');
// const { Sequelize } = require("../models");

// const { Sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('dosen', [{
        nama_dosen: 'Joko Hariyanto S.Kom',
        nip: '110908765',
        alamat: 'Yogyakarta',
        no_telp: '0897634568',
      },
      {
        nama_dosen: 'Joko Susilo S.Kom',
        nip: '110908768',
        alamat: 'Surakarta',
        no_telp: '0897634548',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('dosen', null, {});
  }
};