"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let datas = [
      {
        userid: "Maxgoal",
        password: 1234,
        fullname: "득점왕",
        gender: "여",
        phonenum: "010-1111-1111",
        position: "FW",
        penalty: 0,
        totalGoal: 99,
        totalShooting: 0,
        totalAssist: 0,
        totalPoint: 0,
        penalty: 0,
        totalMatch: 0,
        totalWin: 0,
        Winrate: "100%",
        admin: false,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      },
      {
        userid: "Maxassist",
        password: 1234,
        fullname: "도움왕",
        gender: "여",
        phonenum: "010-1111-1111",
        position: "FW",
        penalty: 0,
        totalGoal: 0,
        totalShooting: 0,
        totalAssist: 99,
        totalPoint: 0,
        penalty: 0,
        totalMatch: 0,
        totalWin: 0,
        Winrate: "100%",
        admin: false,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      },
      {
        userid: "Maxpoint",
        password: 1234,
        fullname: "포인트왕",
        gender: "여",
        phonenum: "010-1111-1111",
        position: "FW",
        penalty: 0,
        totalGoal: 0,
        totalShooting: 0,
        totalAssist: 0,
        totalPoint: 99,
        penalty: 0,
        totalMatch: 0,
        totalWin: 0,
        Winrate: "100%",
        admin: false,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      },
    ];

    let name = ["민준","서준","예준","도윤","시우","주원","하준","지호","지후","준서","준우","현우","도현","지훈","건우","우진","선우","서진","민재","현준","연우","유준","정우","승우","승현","시윤","준혁","은우","지환","승민","지우","유찬","윤우","민성","준영","시후","진우","지원","수현","재윤","시현","동현","수호","태윤","민규","재원","한결","민우","재민","은찬","윤호","시원","이준","민찬","지안","시온","성민","준호","승준","성현"]
    let first = ["김","이","박","최","송","문","윤","유","홍","차"]

    let count = 0

    let fullname = []

    for (let i = 0; i < name.length; i++){
      fullname.push(first[i%9] + name[i])
    }


    for (let i = 0; i < 50; i++) {
      const position = ["FW", "MF", "DF", "GK"];
      let obj = {
        userid: "user" + i,
        password: 1234,
        fullname: fullname[i],
        gender: i % 2 === 0 ? "남" : "여",
        phonenum: "010-1234-5678",
        position: position[i % 4],
        totalGoal: i,
        totalShooting: i,
        totalAssist: i,
        totalPoint: i,
        penalty: i,
        totalMatch: i,
        totalWin: i,
        Winrate: "100%",
        admin: false,
        createdAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
        updatedAt: new Date()
          .toISOString()
          .replace(/T/, " ")
          .replace(/\..+/, ""),
      };
      datas.push(obj);
    }

    return queryInterface.bulkInsert("users", datas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
