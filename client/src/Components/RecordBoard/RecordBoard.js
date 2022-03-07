import React, { useState } from 'react';
import Rank from './Rank';
import Board from './Board';
import './RecordBoard.css';
import Header from '../Mainpage/Header'
import Footer from '../Mainpage/Footer'
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function RecordBoard () {


  
  return (
    <div>
      <Header />
      <Rank />
      <Board />
      <Footer />
    </div>
  );
}
