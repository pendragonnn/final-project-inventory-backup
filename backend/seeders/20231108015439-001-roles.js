"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Roles", [
      {
        id: "1",
        name: "Admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2",
        name: "Staff",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3",
        name: "Manager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {})
  },
}
