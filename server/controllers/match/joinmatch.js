const { sequelize ,users, playerinmatches, matches} = require('../../models');
const jwt = require('jsonwebtoken');
const userinfo = require('../user/userinfo');

module.exports = async (req, res) => {
    console.log("joinmatch!" + req.query.matchid)
    const logininfo = req.headers.authorization;

    if (logininfo){
        //요청 들러온 토큰 정리 
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
        })

            if(!alreadyjoin){
                payload = {
                        userid : userInfo.userid,
                        matchid : req.query.matchid,
                        position : userInfo.position,
                        penalty : userInfo.penalty,
                    }
                    
                await playerinmatches.create({
                        userid : payload.userid,
                        matchid : payload.matchid,
                        goal : 0
                    })

                const nowplayer = await playerinmatches.findAll({
                        where : {
                            matchid : payload.matchid
                            }
                        }).then((res)=>{
                            matches.update({nowplayer : res.length},{
                            where : {
                                matchid : payload.matchid
                            }
                        })}).then(
                        res.status(200).json({
                            message : `${payload.userid} has joined mathch ${payload.matchid}`,
                            data : payload
                        }))
            }else{
                res.status(201).json({
                    message : "Already joined!"
                })
            }
        })
        


    }else{
        res.status(201).json({
            message : "Login first!"
        })
    }
}
