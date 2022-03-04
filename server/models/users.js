module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define("users",{
    userid : {
      type : DataTypes.STRING,
      allowNull : false,
      primaryKey : true
    },

    password : {
      type : DataTypes.STRING,
      allowNull : false,
    },
  
    fullname: {
      type : DataTypes.STRING,
      allowNull : false,
    },

    address: {
      type : DataTypes.STRING,
      allowNull : true,
    },

    gender : {
      type : DataTypes.STRING,
      allowNull : false,
    },

    totalGoal : {
      type : DataTypes.INTEGER,
      allowNull : true,
  
    },

    totalShooting : {
      type : DataTypes.INTEGER,
      allowNull : true,

    },
    totalAssist : {
      type : DataTypes.INTEGER,
      allowNull : true,

    },
  
    totalWin : {
      type : DataTypes.INTEGER,
      allowNull : true,

    },

    Winrate : {
      type : DataTypes.INTEGER,
      allowNull : true,
    },
    
    positon : {
      type : DataTypes.STRING,
      allowNull : true,
    },

    penalty : {
      type : DataTypes.STRING,
      allowNull : true,
    },

    admin : { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })

  return users;
};