import React, { useState } from "react";

export default function Boardlist({ rank, name, goal, assist, point, totalmatch }) {
    return (
        <div className="row">
            <div className="col">{rank}</div>
            <div className="col">{name}</div>
            <div className="col">{goal}</div>
            <div className="col">{assist}</div>
            <div className="col">{point}</div>
            <div className="col">{totalmatch}</div>
        </div>
    );
}
