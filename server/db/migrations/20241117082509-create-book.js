'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      author: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      year: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users", key: "id" },
        onDelete: "SET NULL",
      },
      library_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Libraries", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("NOW"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};