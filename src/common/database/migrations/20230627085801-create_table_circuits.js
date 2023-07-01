'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'circuits',
        {
          circuitId: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          circuitRef: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          name: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          location:{
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          country: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
          },
          lat: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
          },
          lng: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
          },
          alt: {
            type: Sequelize.DataTypes.INTEGER,
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
      await queryInterface.dropTable('circuits', { transaction })
    })
  }
};
