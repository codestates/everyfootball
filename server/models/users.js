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

    gender : {
      type : DataTypes.STRING,
      allowNull : false,
    },

    phonenum : {
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

    totalPoint : {
      type : DataTypes.INTEGER,
      allowNull : true,
    },

    totalMatch : {
      type : DataTypes.INTEGER,
      allowNull : true,
    },

    totalWin : {
      type : DataTypes.INTEGER,
      allowNull : true,
    },

    winrate : {
      type : DataTypes.STRING,
      allowNull : true,
    },
    
    position : {
      type : DataTypes.STRING,
      allowNull : true,
    },

    preferredtime : {
      type : DataTypes.STRING,
      allowNull : true,
    },

    preferredloca : {
      type : DataTypes.STRING,
      allowNull : true,
    },
    

    penalty : {
      type : DataTypes.INTEGER,
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