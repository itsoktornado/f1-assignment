'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'drivers',
        {
          driverId: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          driverRef: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          number: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: true
          },
          code: {
            type: Sequelize.DataTypes.STRING,
            allowNull: true
          },
          forename: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          surname: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          dob: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false
          },
          nationality: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          url: {
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
      await queryInterface.dropTable('drivers', { transaction })
    })
  }
};
