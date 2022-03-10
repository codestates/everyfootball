module.exports = (sequelize, DataTypes) => {
  const grounds = sequelize.define("grounds", {
    groundid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parking: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    toilet: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    shower: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    img: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return grounds;
};
