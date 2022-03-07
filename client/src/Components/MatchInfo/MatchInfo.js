import React, { useState } from 'react';
import StadiumImage from './StadiumImage';
import StadiumInfo from './StadiumInfo';
import PlayerInfo from './PlayerInfo';
import './MatchInfo.css' ;
import Header from '../Mainpage/Header';
import Footer from '../Mainpage/Footer';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function MatchInfo () {


  
  return (
    <div>
        <Header />
        <StadiumImage />
        <StadiumInfo />
        <PlayerInfo />
        <Footer />
    </div>
  );
}
