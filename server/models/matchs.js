'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class matchs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  matchs.init({
    matchid: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },

    time: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },
    player: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },
    location : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },
    
    matchgender : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },

    score : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },

    createdAt: {
        type: Sequelize.DATE
    }},
    
{
    sequelize,
    modelName: 'matchs',
});

return matchs;
};