import React, { useState } from "react";
import PlayerInfolist from "./PlayerInfolist";
import "./PlayerInfoBox.css";
export default function PlayerInfoBox({ usersinfo }) {
    return (
        <div id="player-list-form">
            {usersinfo.userinfo.map((el, i) => {
                return (
                    <PlayerInfolist
                        key={i}
                        gender={el.gender}
                        position={el.position}
                        penalty={el.penalty}
                        goal={el.totalGoal}
                        shoot={el.totalShooting}
                        assist={el.totalAssist}
                        fullname={el.fullname}
                    />
                );
            })}
        </div>
    );
}
