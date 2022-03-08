//매치 상세 UI 데이터 전달 API

const { sequelize ,playerinmatches, users, grounds, matches} = require('../../models');

module.exports = async (req, res) => {
    console.log('data')
    //res.status(200).json({ "url" : "match/data/get", "body" : req.body})

    let matchid = req.query.matchid

    let matchlocation = await matches.findOne({
        where : {
            matchid : matchid
        },attributes : ['location']}
    )
    
    let groundinfo = await grounds.findOne({
        where : {
            location : matchlocation.dataValues.location
        }
    })

    const groundpayload = {
        groundid: groundinfo.groundid,
        name: groundinfo.name,
        location: groundinfo.location,
        parking: groundinfo.parking,
        toilet: groundinfo.toilet,
        shower: groundinfo.shower,
        img: groundinfo.img
    }

    let inmatchuser = await playerinmatches.findAll({
        where : {
            matchid : matchid
        },attributes : ['userid']}
    )
    
    console.log(inmatchuser)
    let userarr = []
    let userinfo = []

    inmatchuser.forEach((el) => {
        userarr.push(el.dataValues.userid)
    }); 
    
// 유저 데이블에서 각 유저 정보 뽑아서 페이로드로 던지기
    for (let i = 0; i < userarr.length; i++) {
        eachuser = await users.findOne({
            where : {
                userid : userarr[i]
            }
        })

        userinfo.push(eachuser)
    }

    console.log(userinfo)

    res.status(200).json({data : {
        groundinfo : {groundpayload},
        usersinfo : {userinfo}
    }})
}

