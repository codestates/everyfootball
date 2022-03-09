import React, { useState } from "react";
import "./PlayerInfolist.css";

export default function PlayerInfolist({ gender, position, penalty, goal, shoot, assist, fullname }) {
    return (
        <div className="player-form">
            <div className="playerlist">
                <div className="player-name">{fullname} 님</div>
                <div className="infoBox">
                    <div className="pInfo">{gender}</div>
                    <div className="pInfo">선호포지션 {position}</div>
                    <div className="pInfo">패널티 {penalty} 회</div>
                </div>
                {/* 관리자만 보이게 */}
                <div className="infoBox">
                    <div className="pInfo">
                        총 득점 <div>{goal} 골</div>
                    </div>
                    <div className="pInfo">
                        유효 슈팅 <div>{shoot} 회</div>
                    </div>
                    <div className="pInfo">
                        어시스트 <div>{assist} 회</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
