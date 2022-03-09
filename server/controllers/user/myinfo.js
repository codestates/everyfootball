const { users, playerinmatches, matches } = require("../../models");
const jwt = require("jsonwebtoken");
const checking = require("./checktoken");

module.exports = async (req, res) => {
  const logininfo = req.headers.authorization;

  const data = jwt.verify(
    req.headers.authorization.split(" ")[1],
    "1234",
    async (err, data) => {
      if (err) {
        res.status(400).json({ data: null, message: "token err" });
      } else if (data) {
        const userInfo = await users.findOne({
          where: {
            userid: data.userid,
          },
        });

        res.status(200).send({ data: userInfo });
      }
    }
  );
};
