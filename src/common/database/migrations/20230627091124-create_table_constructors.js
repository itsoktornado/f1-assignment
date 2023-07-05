'use strict';

const { transcode } = require('buffer');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'constructors',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          constructor_ref: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          name: {
            type: Sequelize.DataTypes.STRING,
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
            allowNull: true,
            defaultValue: Sequelize.DataTypes.NOW,
          },
          updated_at: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
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
      await queryInterface.dropTable('constructors', { transaction })
    })
  }
};
