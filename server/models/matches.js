
module.exports = (sequelize, DataTypes) => {
    const matchs = sequelize.define("matches",{
    matchid: {
        type : DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    time: {
        type : DataTypes.STRING,
        allowNull: false,

    },
    maxplayer: {
        type : DataTypes.STRING,
        allowNull: false,
    },

    nowplayer : {
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
        type : DataTypes.BOOLEAN,
        allowNull: false,
    },
    
    createdAt: {
        type: DataTypes.DATE
    }   
})

return matchs;
};