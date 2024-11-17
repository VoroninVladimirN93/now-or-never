'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

   await queryInterface.bulkInsert('Books', [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, user_id: 1, library_id: 1, createdAt: new Date(), updatedAt: new Date() },
    { title: '1984', author: 'George Orwell', year: 1949, user_id: 2, library_id: 1, createdAt: new Date(), updatedAt: new Date() },
    { title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, user_id: 3, library_id: 2, createdAt: new Date(), updatedAt: new Date() },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, user_id: 4, library_id: 2, createdAt: new Date(), updatedAt: new Date() },
    { title: 'Moby Dick', author: 'Herman Melville', year: 1851, user_id: 5, library_id: 3, createdAt: new Date(), updatedAt: new Date() },
    { title: 'War and Peace', author: 'Leo Tolstoy', year: 1869, user_id: 6, library_id: 3, createdAt: new Date(), updatedAt: new Date() },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, user_id: 7, library_id: 4, createdAt: new Date(), updatedAt: new Date() },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, user_id: 8, library_id: 4, createdAt: new Date(), updatedAt: new Date() },
    { title: 'Brave New World', author: 'Aldous Huxley', year: 1932, user_id: 9, library_id: 5, createdAt: new Date(), updatedAt: new Date() },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866, user_id: 10, library_id: 5, createdAt: new Date(), updatedAt: new Date() },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});
  
  }
};
