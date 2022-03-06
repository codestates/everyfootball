'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    let location = ["서울특별시 강남구 논현로86길 34 B2",
    "서울특별시 강남구 논현로 748 지하1층",
    "서울특별시 서초구 매헌로 16 라시따 7층",
    "서울특별시 강남구 압구정로50길 28 지하1층",
    "서울특별시 송파구 올림픽로 25 잠실종합운동장제1풋살장",
  ]
    let gender = ["남","여","혼성"]
    let datas = [];
    for(let i = 0; i < 10; i++){
      let obj = {
        matchid : i,
        time: `일시 2022.3.${i%20} 시간 ${i%23}:00`,
        maxplayer : 10,
        nowplayer : 0,
        location : `${location[i%5]}`,
        matchgender : `${gender[i%3]}`,
        score : `${i%5} : ${i%2}`,
        matchend : i%2===0 ? true : false,
        createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
        updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
      }
      datas.push(obj)
    }

    return queryInterface.bulkInsert('matches', datas, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('matches', null, {});

  }
};
