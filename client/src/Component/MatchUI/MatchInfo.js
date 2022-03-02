import React, { useState } from 'react';
import StadiumImage from './StadiumImage';
import StadiumInfo from './StadiumInfo';
import PlayerInfo from './PlayerInfo';
import './Match.css' ;
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function MatchInfo () {


  
  return (
    <div>
        <StadiumImage />
        <StadiumInfo />
        <PlayerInfo />
    </div>
  );
}
