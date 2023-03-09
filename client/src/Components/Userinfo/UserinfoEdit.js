import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserinfoFormList.css";

function UserinfoEdit() {
    const accessToken = localStorage.getItem("accessToken");
    const [userinfo, setUserinfo] = useState("");

    const handleModal = () => {
        window.location.replace("/changeinfo");
    };

    const userinfoEditHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get(`${process.env.REACT_APP_API_URL}/user/userinfo`, {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    setUserinfo(res);
                    alert("개인정보수정 성공");
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
        <div id="userinfo-form">
            <div className="editBtn">
                <button onClick={handleModal}>개인 정보 수정</button>
            </div>
            <div className="userinfo-content">
                <div className="userinfo-category">내 정보</div>
                <div className="userinfo-table">
                    <div className="row-header">
                        <div className="col">이름</div>
                        <div className="col">아이디</div>
                        <div className="col">포지션</div>
                        <div className="col">성별</div>
                    </div>
                    <div className="col">{userinfo && userinfo.data.data.userInfo.fullname}</div>
                    <div className="col">{userinfo && userinfo.data.data.userInfo.userid}</div>
                    <div className="col">{userinfo && userinfo.data.data.userInfo.position}</div>
                    <div className="col">{userinfo && userinfo.data.data.userInfo.gender}</div>
                </div>
            </div>
        </div>
    );
}
export default UserinfoEdit;
