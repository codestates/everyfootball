const { users, sequelize } = require('../../models');
const jwt = require('jsonwebtoken');


module.exports = (req, res) => {
    console.log('signup')

    let payload = {
        userid : req.body.userid,
        password : req.body.password,
        fullname : req.body.fullname,
        gender : req.body.gender,
        phonenum : req.body.phonenum,
        position : req.body.position,
        preferredtime : req.body.preferredtime,
        preferredloca : req.body.preferredloca
    }

    sequelize.sync().then((result)=> {
    return users.create({
        userid : req.body.userid,
        password : req.body.password,
        fullname : req.body.fullname,
        gender : req.body.gender,
        position : req.body.position,
        preferredtime : req.body.preferredtime,
        preferredloca : req.body.preferredloca})
    })
    .catch((err)=> {
    console.log(err)
    })

    res.status(200).json({message : "work!", "payload" : payload})

}

