const { users, sequelize } = require("../../models");

module.exports = (req, res) => {
    let payload = req.body

    users.create(payload
).then(
    res.status(200).json({
        message : "work!",
        payload: {payload}
    }))
};
