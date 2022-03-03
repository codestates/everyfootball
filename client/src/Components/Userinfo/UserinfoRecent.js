import React from "react";

function UserinfoRecent({ date, myscore, score, goal, assist }) {
    return (
        <div>
            <table className="userinfo">
                <tr>
                    <td>{date}</td>
                    <td>
                        {myscore} : {score}
                    </td>
                    <td>{goal}</td>
                    <td>{assist}</td>
                </tr>
            </table>
        </div>
    );
}
export default UserinfoRecent;
