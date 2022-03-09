"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    let datas = [];
    let id = 0;
    let goal = [1, 2, 3, 4, 5];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let obj = {
          userid: "user" + j,
          matchid: i + 1,
          goal: goal[j],
          shooting: goal[j] + 2,
          assist: 1,
          end: false,
          win: false,
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
        id = id + 1;
      }
    }

    return queryInterface.bulkInsert("playerinmatches", datas, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("playerinmatches", null, {});
  },
};
