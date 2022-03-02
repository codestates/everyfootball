import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function Board () {


  
  return (
    <div>
       <div className='totalPlayer'>
          선수기록
          <div class="table titleStyle">
            <div class="titleHead">
                <div class="tableRow">
                <div class="title">순위</div>
                <div class="title">선수</div>
                <div class="title">득점</div>
                <div class="title">도움</div>
                <div class="title">공격 포인트</div>
                <div class="title">경기 수</div>
                </div>
            </div>
            <div class="tableBody">
                <div class="tableRow">
                    <div class="cell">1</div>
                    <div class="cell">김xx</div>
                    <div class="cell">13</div>
                    <div class="cell">3</div>
                    <div class="cell">16</div>
                    <div class="cell">4</div>
                </div>
                <div class="tableRow">
                    <div class="cell">2</div>
                    <div class="cell">정xx</div>
                    <div class="cell">7</div>
                    <div class="cell">12</div>
                    <div class="cell">19</div>
                    <div class="cell">3</div>
                </div>
                <div class="tableRow">
                    <div class="cell">3</div>
                    <div class="cell">진xx</div>
                    <div class="cell">6</div>
                    <div class="cell">5</div>
                    <div class="cell">10</div>
                    <div class="cell">3</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
