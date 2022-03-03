
module.exports = (sequelize, DataTypes) => {
    const matchs = sequelize.define("matchs",{
    matchid: {
        type : DataTypes.STRING,
        allowNull: false,
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
        allowNull: false,
    },

    createdAt: {
        type: DataTypes.DATE
    }   
})

return matchs;
};