'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.sequelize.transaction(async (transaction) => {
      await queryInterface.createTable(
        'circuits',
        {
          id: {
            type: Sequelize.DataTypes.INTEGER,
            //autoIncrement: true,
            primaryKey: true
          },
          circuit_ref: {
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
          },          created_at: {
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
      await queryInterface.dropTable('circuits', { transaction })
    })
  }
};
