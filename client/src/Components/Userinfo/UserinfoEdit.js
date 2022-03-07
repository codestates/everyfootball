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
                .get("http://localhost:4000/user/userinfo", {
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
        userinfoEditHandler();
    }, []);

    return (
        <div className="text">
            <h4>개인정보</h4>
            <table className="userinfo">
                <tr>
                    <td className="text">이름: {userinfo && userinfo.data.data.userInfo.fullname}</td>
                    <td className="text">아이디: {userinfo && userinfo.data.data.userInfo.userid}</td>
                    {/* <td>선호 구장 위치: {preferLocation}</td>
                    <td>선호 경기 시간: {preferTime} 시</td> */}
                    <td className="text">포지션: {userinfo && userinfo.data.data.userInfo.position}</td>
                    <td className="text">성별: {userinfo && userinfo.data.data.userInfo.gender}</td>
                    {/* <td>생년 월일: {birth}</td> */}
                </tr>
            </table>
        </div>
    );
}
export default UserinfoEdit;
