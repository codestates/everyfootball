import React from "react";
const UserinfoRecentList = ({ time, score, goal, assist, win }) => {
    return (
        <div className="row">
            <div className="col">{time}</div>
            <div className="col">{score}</div>
            <div className="col">{goal}</div>
            <div className="col">{assist}</div>
        </div>
    );
};
export default UserinfoRecentList;
