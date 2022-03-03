const { users, sequelize } = require('../../models');
const jwt = require('jsonwebtoken');


module.exports = (req, res) => {
    console.log('signup')

    let payload = {
        userid : req.body.userid,
        password : req.body.password,
        fullname : req.body.fullname,
        gender : req.body.gender,
        location : req.body.location,
        position : req.body.position
    }

    sequelize.sync().then((result)=> {
    return users.create({
        userid : req.body.userid,
        password : req.body.password,
        fullname : req.body.fullname,
        gender : req.body.gender,
        location : req.body.location,
        position : req.body.position})
    })
    .catch((err)=> {
    console.log(err)
    })

    res.status(200).json({message : "work!", "payload" : payload})

}

