const jwt = require('jsonwebtoken');
const { users } = require('../../models');

module.exports = async (req, res) => {

    console.log("===============================================")
    const authorization = req.headers.authorization;
    const refresh_Token = req.cookies.refreshToken

    console.log(authorization)
    console.log(refresh_Token)

    if (authorization){
        //요청 들러온 토큰 정리 
        const access_Token = authorization.split(" ")[1]
        const data = jwt.verify(access_Token, "1234", async(err,data)=>{
            if(err){
                console.log("엑세스 토큰 에러로 여기로 들어옴") // 유효하지 않은 엑세스 토큰일때 리프레쉬 토큰을 기반으로 액세스 토큰 발급
                data = jwt.verify(refresh_Token, "5678",async(err,data)=>{
                    if(err){
                        //리프레쉬 토큰이 유효하지 않다면 로그인 다시 하게함
                        console.log('===========리프레쉬 토큰 에러로 여기로 옴==============')
                        console.log(err)
                        res.send({ data: null, message: "Please login again" })
                    } else if(data){
                        // 리프레쉬 토큰이 유효하다면 토큰 풀어서 같은 유저내용 찾고 그걸로 엑세스 토큰 발급
                        console.log('==========리프레쉬 유효하니까 새로 액세스 토큰 발급함=========')
                        console.log(data)
                        const userData = await users.findOne({
                            where : {
                                userid: data.userid,
                                fullname : data.fullname
                            }
                        }).then((data) =>{
                            console.log('============클라이언트로 새로운 토큰 보냄==============')
                            let payload = {
                                userid : data.dataValues.userid,
                                fullname : data.dataValues.fullname,
                            };
                            console.log(payload)
                            const access_Token = jwt.sign(payload,"1234",{expiresIn : '10h'});
                            console.log(access_Token) //토큰 발행은 됬음
                            }).then((data) =>{
                                res.status(200).json({ data: { accessToken : data }, message : "Token given, try again"})})
                    }    
                })       
            }else if (data){
                console.log('===========액세스 토큰 유요함===========')
                return true
            }
        })
    }else{
        console.log("no authorization")
        res.status(400).json({data : null, message : "No any token"})
    }
}

