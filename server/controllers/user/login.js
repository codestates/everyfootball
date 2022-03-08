const { users } = require('../../models');
const jwt = require('jsonwebtoken');


module.exports = async(req, res) => {
    console.log('login')

    const userInfo = await users.findOne({
        where: { 
        userid: req.body.userid, 
        password: req.body.password },
        });
        
        if (!userInfo){
        console.log(userInfo)
        res.status(400).json({ "data": null, "message": "not authorized" })
        
        }else{
        let payload = {
            userid : userInfo.dataValues.userid,
            fullname : userInfo.dataValues.fullname,
        };
    
    
        const access_Token = jwt.sign(payload,"1234",{expiresIn : '10h'});
        const refresh_Token = jwt.sign(payload,"5678",{expiresIn : '2days'});
    
        res.status(200).cookie("refreshToken",refresh_Token,{
            httpOnly: true,
            secure : true,
            sameSite: "none"
        }).json({ data: { accessToken : access_Token }, message : "ok"})
        }
}