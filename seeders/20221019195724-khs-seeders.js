'use strict';
// const bcrypt = require('bcrypt');
// const { Sequelize } = require("../models");

// const { Sequelize } = require("../models");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('khs', [{
        nama_mk: 'Rekayasa Web',
        npm: '519411438',
        tahun_ajaran: '2019',
        semester: '3',
        jadwal: 'SENIN, 14.40',
      },
      {
        nama_mk: 'Rekayasa Web',
        npm: '519411456',
        tahun_ajaran: '2019',
        semester: '3',
        jadwal: 'SENIN, 14.40',
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('khs', null, {});
  }
};