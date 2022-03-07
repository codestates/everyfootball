const { users, sequelize } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
  // console.log("signup");

  let payload = {
    userid: req.body.userid,
    password: req.body.password,
    fullname: req.body.fullname,
    gender: req.body.gender,
    position: req.body.position,
    preferredtime: req.body.preferredtime,
    preferredloca: req.body.preferredloca,
    phonenum: req.body.phonenum,
  };

  // users.create(payload);
  // console.log(CreatedUser);

  sequelize
    .sync()
    .then((result) => {
      return users.create({
        userid: req.body.userid,
        password: req.body.password,
        fullname: req.body.fullname,
        gender: req.body.gender,
        position: req.body.position,
        preferredtime: req.body.preferredtime,
        preferredloca: req.body.preferredloca,
        phonenum: req.body.phonenum,
      });
    })
    .catch((err) => {
      throw err;
    });
  res.status(200).send({ message: "work!" });
};
