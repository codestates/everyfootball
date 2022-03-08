"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      userid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      phonenum: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      totalgoal: {
        type: Sequelize.STRING,
      },
      total: {
        type: Sequelize.STRING,
      },
      totalshooting: {
        type: Sequelize.STRING,
      },
      totalassist: {
        type: Sequelize.STRING,
      },
      totalwin: {
        type: Sequelize.STRING,
      },
      winrate: {
        type: Sequelize.STRING,
      },
      totalmatch: {
        type: Sequelize.STRING,
      },
      totalPoint: {
        type: Sequelize.STRING,
      },
      penalty: {
        type: Sequelize.STRING,
      },
      preferredtime: {
        type: Sequelize.STRING,
      },
      preferredloca: {
        type: Sequelize.STRING,
      },
      admin: {
        type: Sequelize.STRING,
      },
    });

    await queryInterface.createTable("matchs", {
      matchid: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },

      time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      player: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      matchgender: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      score: {
        type: Sequelize.STRING,
      },

      createdAt: {
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("grounds", {
      groundid: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      location: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      parking: {
        type: Sequelize.STRING,
      },

      toilet: {
        type: Sequelize.STRING,
      },

      shower: {
        type: Sequelize.STRING,
      },

      img: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
    await queryInterface.dropTable("matchs");
    await queryInterface.dropTable("grounds");
  },
};
