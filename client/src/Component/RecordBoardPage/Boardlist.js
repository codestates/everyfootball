import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function Boardlist ({rank,name,goal,assist,point,totalmatch}) {
  
  
  return (
    <div>
        <div class="tableBody">
            <div class="tableRow">
                <div className="cell">{rank}</div>
                <div className="cell">{name}</div>
                <div className="cell">{goal}</div>
                <div className="cell">{assist}</div>
                <div className="cell">{point}</div>
                <div className="cell">{totalmatch}</div>
            </div>
        </div>
    </div>
  );
}
