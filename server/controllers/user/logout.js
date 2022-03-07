//작업중
const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // const logininfo = req.headers.authorization;
  // console.log()
  // let matchlist = []
  // if (logininfo){
  //     //요청 들러온 토큰 정리
  //     const token = logininfo.split(" ")[1]
  //     const data = jwt.verify(token, "1234")
  //     const userInfo = await users.findOne({
  //                 where: {
  //                     userid: data.userid
  //                 },
  //             });
  //     const lastmatch = await playerinmatches.findAll({
  //         limit : 10,
  //         where : {
  //             userid: data.userid}
  //     })
  //     for (let i =0; i < lastmatch.length; i++){
  //         let target = lastmatch[i]
  //         const time = await matches.findOne({
  //             where : {
  //                 matchid : target.matchid
  //             },attributes : ['time']})
  //         const score = await matches.findOne({
  //             where : {
  //                 matchid : target.matchid
  //             },attributes : ['score']})
  //         const payload = await {
  //             time : time.dataValues.time,
  //             score : score.dataValues.score,
  //             goal : target.goal,
  //             assist : target.assist,
  //             win : target.win,
  //         }
  //         matchlist.push(payload)
  //     }
  //     console.log(matchlist)
  //     res.status(200).json({data: {userInfo}, last10match : matchlist})
  // }else{
  //     res.status(400).json({message : "login first!"})}
};
