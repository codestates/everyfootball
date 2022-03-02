'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    userid : {
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true,
      validate : {
        notEmpty: true
      }
    },

    password : {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },
  
    fullname: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notEmpty: true
      }
    },

    address: {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },

    gender : {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },

    totalGoal : {
      type : DataTypes.INTENGER,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },

    totalShooting : {
      type : DataTypes.INTENGER,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },
    totalAssist : {
      type : DataTypes.INTENGER,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },
  
    totalWin : {
      type : DataTypes.INTENGER,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },

    Winrate : {
      type : DataTypes.INTENGER,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },
    
    positon : {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    },

    penalty : {
      type : DataTypes.STRING,
      allowNull : false,
      validate :{
        notEmpty : true
      }
    }
  },
    {
    sequelize,
    modelName: 'user',
  });
  return user;
};