
module.exports = (sequelize, DataTypes) => {
    const matchs = sequelize.define("matchs",{
    matchid: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    time: {
        type : DataTypes.STRING,
        allowNull: false,

    },
    player: {
        type : DataTypes.STRING,
        allowNull: false,

    },
    location : {
        type : DataTypes.STRING,
        allowNull: false,
    },
    
    matchgender : {
        type : DataTypes.STRING,
        allowNull: false,
    },

    score : {
        type : DataTypes.STRING,
    },

    matchend : {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
})

return matchs;
};