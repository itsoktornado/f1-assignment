'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'constructor_standings',
        {
          constructorStandingsId:{
            type: Sequelize.DataTypes.NUMBER,
            primaryKey: true
          },
          raceId: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          },
          constructorId: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          },
          points: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          },
          position: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          },
          positionText: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          wins: {
            type: Sequelize.DataTypes.NUMBER,
            allowNull: false
          }
        },
        {
          transaction
        }
      )
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.dropTable('constructor_standings', { transaction })
    })
  }
};
