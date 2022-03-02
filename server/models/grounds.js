'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class grounds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
}

grounds.init({
    groundid: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },

    name: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },
    location: {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
        validate : {
            notEmpty : true
        }
    },
    parking : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,

    },
    
    toilet : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    
    },

    shower : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,

    },

    img : {
        type : DataTypes.STRING,
        allowNull: false,
        primaryKey: true,

    },
    
},
{
    sequelize,
    modelName: 'grounds',
});

return grounds;
};