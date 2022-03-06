import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function PlayerInfolist ({gender,level,position,penalty}) {
  
  
  return (
    <div>
      <div className='playerList'>
        <div className='player'>선수정보</div>
          <div className='infoBox'>
              <div className='pInfo'>{gender}</div>
              <div className='pInfo'>{level}</div>
              <div className='pInfo'>{position}</div>
              <div className='pInfo'>{penalty}</div>
          </div>    

      </div>
    </div>
  );
}
