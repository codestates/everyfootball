const { sequelize ,users, playerinmatches} = require('../../models');
const jwt = require('jsonwebtoken');
const userinfo = require('../user/userinfo');

module.exports = (req, res) => {
    const logininfo = req.headers.authorization;

    const token = logininfo.split(" ")[1]
    let userInfo
    let payload
    
    const data = jwt.verify(token, "1234", async(err,data)=>{
        userInfo = await users.findOne({
            where: { 
                userid: data.userid
            },
        });

        const alreadyjoin = await playerinmatches.findOne({
            where: {
                userid: data.userid,
                matchid : req.query.matchid
            }
        });
    
        if(alreadyjoin){
            playerinmatches.destroy({
                where : {
                    userid: data.userid,
                    matchid : req.query.matchid
                }
            })
            .then(res.status(200).json({message : `${data.userid} leaved from match ${req.query.matchid}`}))
        }else{
            res.status(404).json({message : "not in match"})
        }
    })
}
