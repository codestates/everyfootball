import React, { useState } from 'react';
import PlayerInfoBox from './PlayerInfoBox';


export default function PlayerInfo () {

  const [text, setText] = useState("신청하기");
  
  const changeText = (e) => {
    setText(el => el === "신청하기" ? "취소하기" : "신청하기" );
  };



  return (
    <div>
      <div className='totalPlayer'>
        <PlayerInfoBox />
      </div>
      <button onClick={changeText}>{text}</button>
    </div>
  );
}
