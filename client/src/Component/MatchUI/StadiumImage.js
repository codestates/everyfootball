import React, { useState } from 'react';
import image from './futsal.jpg'
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function StadiumImage () {

  const imagestyle = {
    height: "20vh",  //this is wrong
          width: "30vw",
              };
  
  return (
    <div>
        <div className='stadium'>
            구장 이미지 및 지도
            <div className='info'>
                <img src={image} style={imagestyle} alt="futsal"></img>
            </div>
        </div>
    </div>
  );
}
