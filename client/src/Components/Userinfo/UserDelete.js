import axios from "axios";
import React from "react";
import "./UserDelete.css";

const userDelete = () => {
    const accessToken = localStorage.getItem("accessToken");

    const deleteHandler = () => {
        if (!accessToken) {
            return;
        } else {
            axios
                .get("http://localhost:4000/user/signout", {
                    headers: { authorization: `Bearer ${accessToken}` },
                    "Content-Type": "application/json",
                })
                .then((res) => {
                    console.log("탈퇴");
                    localStorage.removeItem("accessToken");
                    localStorage.removeItem("fullname");
                    alert("회원탈퇴가 완료되었습니다.");
                    window.location.replace("/");
                })
                .catch((err) => {
                    console.log("회원탈퇴 에러", err);
                    // alert("잘못된 요청입니다");
                });
        }
    };

    return (
        <div className="submit">
            <button onClick={deleteHandler}>회원 탈퇴</button>
        </div>
    );
};

export default userDelete;
