import React, { useState, useEffect } from "react";
import axios from "axios";

function UserinfoEdit({ name, userid, preferLocation, preferTime, position, gender, birth }) {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");
    const userinfoEditHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get(`https://jsonplaceholder.typicode.com/users/`, {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    setUserinfo(res);
                    console.log("개인정보수정 성공");
                })
                .catch((err) => {
                    console.log("개인정보수정 에러", err);
                });
        }
    };
    useEffect(() => {
        if (userinfo && userinfo.data.length > 0) {
            console.log(userinfo.data[0].name);
        }
        userinfoEditHandler();
    }, []);

    return (
        <div className="text">
            <h4>개인정보 수정</h4>
            <table className="userinfo">
                <tr>
                    <td>이름: {name}</td>
                    <td>아이디: {userid}</td>
                    <td>선호 구장 위치: {preferLocation}</td>
                    <td>선호 경기 시간: {preferTime} 시</td>
                    <td>포지션: {position}</td>
                    <td>성별: {gender}</td>
                    <td>생년 월일: {birth}</td>
                </tr>
            </table>
        </div>
    );
}
export default UserinfoEdit;
