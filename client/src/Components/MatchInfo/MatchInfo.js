import React, { useState } from 'react';
import StadiumImage from './StadiumImage';
import StadiumInfo from './StadiumInfo';
import PlayerInfo from './PlayerInfo';
import './MatchInfo.css' ;
import { useLocation } from 'react-router-dom';

export default function MatchInfo () {
  const location = useLocation();
  console.log("location state", location.state)
  return (
    <div>
        <StadiumImage matchId={location.state.state.matchid} />
        <StadiumInfo matchData={location.state}/>
        <PlayerInfo matchData={location.state}/>
    </div>
  );
}
