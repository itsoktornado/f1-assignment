'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'drivers',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          driver_ref: {
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
          },
          created_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          deleted_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
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
