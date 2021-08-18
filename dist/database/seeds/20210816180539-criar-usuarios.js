"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [{
      nome: 'John travolta',
      email: 'zxc@zxc.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }, {
      nome: 'Johny depp',
      email: 'zxc2@zxc.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }, {
      nome: 'John mayer',
      email: 'zxc3@zxc.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),

    }], {});
  },

  down: async () => {},
};
