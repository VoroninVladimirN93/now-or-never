'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('Users', [
    { name: 'John Doe', password: await bcrypt.hash('password123', 10), email: 'john@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Jane Smith', password: await bcrypt.hash('securepass', 10), email: 'jane@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Alice Johnson', password: await bcrypt.hash('alicepass', 10), email: 'alice@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Bob Brown', password: await bcrypt.hash('bobbypass', 10), email: 'bob@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Charlie White', password: await bcrypt.hash('charlie123', 10), email: 'charlie@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Daisy Green', password: await bcrypt.hash('daisysecure', 10), email: 'daisy@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Eve Black', password: await bcrypt.hash('evepassword', 10), email: 'eve@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Frank Blue', password: await bcrypt.hash('frankpass', 10), email: 'frank@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Grace Red', password: await bcrypt.hash('gracepass', 10), email: 'grace@example.com', createdAt: new Date(), updatedAt: new Date() },
    { name: 'Hank Yellow', password: await bcrypt.hash('hanksecure', 10), email: 'hank@example.com', createdAt: new Date(), updatedAt: new Date() },
  ], {});

  },

  async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('People', null, {});

  }
};
