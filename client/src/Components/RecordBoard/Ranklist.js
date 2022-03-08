import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function Ranklist ({award, name,goal}) {
  
  
  return (
    <div>
        <div className='topBox'>
            <div className='top'>{award}</div>
            <div className='hero'>{name} {goal}골</div>
        </div>
    </div>
  );
}
