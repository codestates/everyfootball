const { sequelize, users, playerinmatches } = require("../../models");

module.exports = async (req, res) => {
  console.log("record");

  maxgoal = await users.max("totalGoal");
  maxassist = await users.max("totalAssist");
  maxpoint = await users.max("totalPoint");

  maxgoaluser = await users.findOne({
    where: {
      totalgoal: maxgoal,
    },
  });

  maxassistuser = await users.findOne({
    where: {
      totalassist: maxassist,
    },
  });

  maxpointuser = await users.findOne({
    where: {
      totalpoint: maxpoint,
    },
  });

  const maxuserpayload = {
    mostgoal: {
      fullname: maxgoaluser.dataValues.fullname,
      userid: maxgoaluser.dataValues.userid,
      goal: maxgoaluser.dataValues.totalGoal,
    },
    mostassist: {
      fullname: maxassistuser.dataValues.fullname,
      userid: maxassistuser.dataValues.userid,
      assist: maxassistuser.dataValues.totalAssist,
    },
    mostpoint: {
      fullname: maxassistuser.dataValues.fullname,
      userid: maxpointuser.dataValues.userid,
      point: maxpointuser.dataValues.totalPoint,
    },
  };

  const topusers = await users.findAll({
    limit: 10,
    order: [["totalGoal", "DESC"]],
  });

  res.status(200).json({
    data: {
      maxusers: maxuserpayload,
      topusers: topusers,
    },
  });

  // 최대골 유저 추출
};
