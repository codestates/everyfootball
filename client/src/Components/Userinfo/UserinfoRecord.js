import React from "react";

function UserinfoRecord({ game, goal, assist, penalty }) {
    return (
        <table className="userinfo">
            <tr>
                <td>총 경기: {game}</td>
                <td>총 득점: {goal}</td>
                <td>총 어시스트: {assist}</td>
                <td>패널티: {penalty}</td>
            </tr>
        </table>
    );
}
export default UserinfoRecord;
