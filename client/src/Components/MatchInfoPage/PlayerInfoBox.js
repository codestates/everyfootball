import React, { useState } from "react";
import PlayerInfolist from "./PlayerInfolist";
import "./PlayerInfoBox.css";
export default function PlayerInfoBox() {
    const dummyData = [
        {
            gender: "남",
            position: "FW",
            penalty: 0,
        },
        {
            gender: "남",
            position: "DF",
            penalty: 1,
        },
        {
            gender: "남",
            position: "FW",
            penalty: 3,
        },
        {
            gender: "여",
            position: "FW",
            penalty: 1,
        },
        {
            gender: "남",
            position: "DF",
            penalty: 6,
        },
        {
            gender: "남",
            position: "DF",
            penalty: 2,
        },
    ];
    return (
        <div id="player-list-form">
            {dummyData.map((el, i) => {
                return <PlayerInfolist key={i} gender={el.gender} position={el.position} penalty={el.penalty} />;
            })}
        </div>
    );
}
