'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Libraries', [
      { address: '123 Main Street, Cityville', name: 'Central Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '456 Oak Avenue, Townsville', name: 'Oakwood Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '789 Pine Road, Villagetown', name: 'Pine Valley Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '101 Maple Street, Hamletburg', name: 'Maple Leaf Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '202 Elm Boulevard, Metro City', name: 'Elmwood Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '303 Birch Lane, Capitalville', name: 'Birchwood Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '404 Cedar Court, Suburbia', name: 'Cedar Grove Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '505 Aspen Drive, Greenfield', name: 'Aspen Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '606 Willow Way, Rivertown', name: 'Willow Branch Library', createdAt: new Date(), updatedAt: new Date() },
      { address: '707 Poplar Path, Seaside', name: 'Poplar Creek Library', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('People', null, {});

  }
};
