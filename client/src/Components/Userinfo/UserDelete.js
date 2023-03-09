import axios from "axios";
import React from "react";
import "./UserDelete.css";

const userDelete = () => {
    const accessToken = localStorage.getItem("accessToken");
    const deleteModal = () => {
        if (window.confirm("정말 회원탈퇴하시겠습니까?")) {
            deleteHandler();
        } else {
            alert("회원탈퇴 취소하기");
        }
    };
    const deleteHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get(`${process.env.REACT_APP_API_URL}/user/signout`, {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("fullname");
                    alert("그동안 이용해 주셔서 감사합니다.");
                    window.location.replace("/");
                })
                .catch((err) => { 
                    alert("잘못된 요청입니다");
                });
        }
    };

    return (
        <div className="deleteBtn">
            <button onClick={deleteModal}>회원 탈퇴</button>
        </div>
    );
};

export default userDelete;
