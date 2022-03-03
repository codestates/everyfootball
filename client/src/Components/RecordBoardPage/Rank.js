import React, { useState } from 'react';
import Ranklist from './Ranklist'
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function Rank () {

    const dummyData = [
        {
            award: '득점왕',
            name : '김xx',
            goal : 12
        },
        {
            award: '도움왕',
            name : '정xx',
            goal : 13
        },
        {
            award: '최다 공격 포인트',
            name : '진xx',
            goal : 15
        },
    ]

  
  return (
    <div>
       <div className='totalRanking'>
          주요 부문 랭킹
           <div className='totalTopBox'>
                {dummyData.map((el, i) => {
                    return <Ranklist key={i} award={el.award} name={el.name} goal={el.goal}/>
                })}
           </div>
       </div>
    </div>
  );
}
