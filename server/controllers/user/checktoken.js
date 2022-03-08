const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {

    console.log("===============================================")
    const logininfo = req.headers.authorization;
    const refresh_Token = req.cookies.refreshToken


    if (logininfo){
        //요청 들러온 토큰 정리 
        const access_Token = logininfo.split(" ")[1]
        const data = jwt.verify(access_Token, "1234", async(err,data)=>{
            if(err){
                data = jwt.verify(refresh_Token, "5678",async(err,data)=>{
                    if(err){
                        res.send({ data: null, message: "invalid refresh token, please log in again" })
                    } else if(data){
                        const userData = await Users.findOne({
                            where : {
                                userId: data.userId
                            }})
                    }
                })
                
            }


        })        
    }else{
        res.status(400).json({message : "login first!"})}
}

