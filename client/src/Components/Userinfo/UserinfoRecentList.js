import React from "react";
const UserinfoRecentList = ({ time, score, goal, assist, win }) => {
    return (
        <div className="row-header">
            <div className="column">{time}</div>
            <div className="column">{score}</div>
            <div className="column">{goal}</div>
            <div className="column">{assist}</div>
        </div>
    );
};
export default UserinfoRecentList;
