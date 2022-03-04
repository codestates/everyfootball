const { users } = require('../../models');
const jwt = require('jsonwebtoken');
const { userinfo } = require('..');

module.exports = (req, res) => {
    console.log('userinfo')
    
    const logininfo = req.headers.authorization;


    if (logininfo){
        const token = logininfo.split(" ")[1]
        
        const data = jwt.verify(token, "1234", async(err,data)=>{

            const userInfo = await users.findOne({
                where: { 
                    userid: data.userid
                },
            });

        
            res.status(200).json({data: {userInfo}})
        })

    }

    
} 