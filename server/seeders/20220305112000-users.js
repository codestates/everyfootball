"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    let datas = [
      {
        userid: "Maxgoal",
        password: 1234,
        fullname: "Maxgoal",
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
        fullname: "Maxassist",
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
        fullname: "Maxpoint",
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

    for (let i = 0; i < 50; i++) {
      const position = ["FW", "MF", "DF", "GK"];
      let obj = {
        userid: "user" + i,
        password: 1234,
        fullname: "testUser" + i,
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
