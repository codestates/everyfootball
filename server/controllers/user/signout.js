const { users } = require('../../models');
const jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    console.log("회원탈퇴~~~~~~~~~~~~~~~~~~~~~")
    const logininfo = req.headers.authorization;
    console.log(logininfo)

    if (logininfo){
        const token = logininfo.split(" ")[1]
        const data = jwt.verify(token, "1234")


        users.destroy({
            where : {
                userid : data.userid
            }
        }).then(res.status(200).json({message : "Sign out done!"}))
        
    }else{
        res.status(400).json({message : "login first!"})}
}

