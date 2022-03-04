import React, { useState } from 'react';
import PlayerInfolist from './PlayerInfolist';

export default function PlayerInfoBox () {
  
    const dummyData = [
        {
          gender: '남',
          level : '1',
          position : 'FW',
          penalty : 0
        },
        {
          gender: '남',
          level : '2',
          position : 'DF',
          penalty : 1
        },
        {
          gender: '남',
          level : '1',
          position : 'FW',
          penalty : 3
        },
        {
            gender: '여',
            level : '3',
            position : 'FW',
            penalty : 1
          },
          {
            gender: '남',
            level : '7',
            position : 'DF',
            penalty : 6
          },
          {
            gender: '남',
            level : '4',
            position : 'DF',
            penalty : 2
          },
    ]
  return (
    <div>
      <div >
        {dummyData.map((el, i) => {
            return <PlayerInfolist key={i} gender={el.gender} level={el.level} position={el.position} penalty={el.penalty}/>
        })}
        </div>
    </div>
  );
}
