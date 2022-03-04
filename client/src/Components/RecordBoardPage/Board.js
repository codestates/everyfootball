import React, { useState } from 'react';
import Boardlist from './Boardlist';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function Board () {
  const dummyData = [
    {
        rank : 1,
        name : '김xx',
        goal : 13,
        assist : 3,
        point : 16,
        totalmatch: 4,
    },
    {
        rank : 2,
        name : '정xx',
        goal : 7,
        assist : 12,
        point : 19,
        totalmatch: 3,
    },
    {
      rank : 3,
      name : '진xx',
      goal : 6,
      assist : 5,
      point : 10,
      totalmatch: 3,
    },

]

  
  return (
    <div>
       <div className='totalPlayer'>
          선수기록
          <div className="table">
            <div className="row-header">
              <div className="col">순위</div>
              <div className="col">선수</div>
              <div className="col">득점</div>
              <div className="col">도움</div>
              <div className="col">공격 포인트</div>
              <div className="col">경기 수</div>
            </div>
            {dummyData.map((el, i) => {
              return <Boardlist key={i} rank={el.rank} name={el.name} goal={el.goal}
                      assist={el.assist} point={el.point} totalmatch={el.totalmatch} />
            })}
          </div>             
        </div>
    </div>
  );
}
