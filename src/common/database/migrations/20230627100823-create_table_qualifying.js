'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'qualifying',
        {
          qualifyId: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          raceId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'races',
              key: 'raceId'
            }
          },
          driverId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'drivers',
              key: 'driverId'
            }
          },
          constructorId: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'constructors',
              key: 'constructorId'
            }
          },
          number: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          position: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
          },
          q1: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          q2: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          q3: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
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
      await queryInterface.dropTable('qualifying', { transaction })
    })
  }
};
