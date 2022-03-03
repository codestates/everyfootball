import React from "react";

function UserinfoEdit({ name, userId, preferLocation, preferTime, position, gender, birth }) {
    return (
        <table className="userinfo">
            <tr>
                <td>이름: {name}</td>
                <td>아이디: {userId}</td>
                <td>선호 구장 위치: {preferLocation}</td>
                <td>선호 경기 시간: {preferTime} 시</td>
                <td>포지션: {position}</td>
                <td>성별: {gender}</td>
                <td>생년 월일: {birth}</td>
            </tr>
        </table>
    );
}
export default UserinfoEdit;
