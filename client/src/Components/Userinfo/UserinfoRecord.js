import React, { useState, useEffect } from "react";
import axios from "axios";

function UserinfoRecord({ game, goal, assist, penalty }) {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");

    const userinfoRecordHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/`, {
                    // headers:{localStorage.getItem("accessToken")}
                    headers: { "Content-Type": "application/json" },
                })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    setUserinfo(res);
                    console.log("개록기록 성공");
                })
                .catch((err) => {
                    console.log("개록기록 에러", err);
                });
        }
    };
    useEffect(() => {
        if (userinfo && userinfo.data.length > 0) {
            console.log(userinfo.data[0].name);
        }
        userinfoRecordHandler();
    }, []);

    return (
        <table className="userinfo">
            <tr>
                <td>총 경기: {userinfo && userinfo.data[0].name}</td>
                <td>총 득점: {goal}</td>
                <td>총 어시스트: {assist}</td>
                <td>패널티: {penalty}</td>
            </tr>
        </table>
    );
}
export default UserinfoRecord;
