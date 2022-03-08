// 로그아웃 완료 (나머지 코드 마지막에 삭제)
const { users } = require("../../models");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  // const logininfo = req.headers.authorization;
  // let matchlist = []

  // if (logininfo){
  //     //요청 들러온 토큰 정리
  //     const token = logininfo.split(" ")[1]
  //     const data = jwt.verify(token, "1234")
  //     const userInfo = await users.findOne({
  //                 where: {
  //                     userid: data.userid
  //                 },
  //             })
  //             .then(res.status(200).json({message : "logout done"}))

  // }else{
  //     res.status(400).json({message : "login first!"})}

  res.clearCookie("refreshToken");
  res.status(200).send({ message: "logouted" });
};
