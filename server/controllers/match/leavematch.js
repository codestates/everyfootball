const { sequelize, users, playerinmatches, matches } = require("../../models");
const jwt = require("jsonwebtoken");
const userinfo = require("../user/userinfo");

module.exports = (req, res) => {
  const logininfo = req.headers.authorization;

  const token = logininfo.split(" ")[1];
  let userInfo;
  let payload;

  const data = jwt.verify(token, "1234", async (err, data) => {
    userInfo = await users.findOne({
      where: {
        userid: data.userid,
      },
    });

    const alreadyjoin = await playerinmatches.findOne({
      where: {
        userid: data.userid,
        matchid: req.params.matchid,
      },
    });

    if (alreadyjoin) {
      await playerinmatches.destroy({
        where: {
          userid: data.userid,
          matchid: req.params.matchid,
        },
      });

      const nowplayer = await playerinmatches
        .findAll({
          where: {
            matchid: req.params.matchid,
          },
        })
        .then((res) => {
          console.log(res.length);
          matches.update(
            { nowplayer: res.length },
            {
              where: {
                matchid: req.params.matchid,
              },
            }
          );
        })
        .then(
          res.status(200).json({
            message: `leaved from match`,
          })
        );
    } else {
      res.status(201).json({ message: "not in match" });
    }
  });
};
