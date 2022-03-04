
const { users } = require('../../models');

module.exports = async (req, res) => {
    console.log('changeinfo')


    const targetuser = await users.findOne({
        where : { userid : req.body.userid }
        })
            
        if(!targetuser){
            res.status(400).send({message : 'no user'})}
        else {
        targetuser.update({
            password : req.body.password,
            address : req.body.address,
            position : req.body.position
        })

        res.status(200).send({
            message : "change done!",
            data :{
                userid : req.body.userid,
                address : req.body.address,
                position : req.body.position
            }
        })
    }
}

