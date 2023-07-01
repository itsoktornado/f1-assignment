'use strict';

const { transcode } = require('buffer');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'constructors',
        {
          constructorId: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          constructorRef: {
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
