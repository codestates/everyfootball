import React, { useState } from 'react';
import Rank from './Rank';
import Board from './Board';
import './RecordBoard.css';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function RecordBoard () {


  
  return (
    <div>
      <Rank />
      <Board />
    </div>
  );
}
