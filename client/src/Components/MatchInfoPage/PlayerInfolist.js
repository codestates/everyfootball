import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function PlayerInfolist ({gender, position, penalty, goal, shoot, assist}) {
  

  return (
    <div>
      <div className='playerList'>
        <div className='infoBox'>
            <div className='pInfo'>{gender}</div>
            <div className='pInfo'>{position}</div>
            <div className='pInfo'>{penalty}</div>
        </div>   
        {/* 관리자만 보이게 */}
        <div className='infoBox'>
            <div className='pInfo'>{goal}</div>
            <div className='pInfo'>{shoot}</div>
            <div className='pInfo'>{assist}</div>
        </div>   
      </div>
    </div>
  );
}
