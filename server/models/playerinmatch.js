module.exports = (sequelize, DataTypes) => {
  const playerinmatch = sequelize.define("playerinmatches", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    userid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    matchid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    goal: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    shooting: {
      type: DataTypes.STRING,
    },

    assist: {
      type: DataTypes.STRING,
    },

    win: {
      type: DataTypes.BOOLEAN,
    },

    end: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });

  return playerinmatch;
};
