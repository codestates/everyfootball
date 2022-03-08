import axios from "axios";
import React from "react";
import "./UserDelete.css";

const userDelete = ({ setLogin }) => {
    const accessToken = localStorage.getItem("accessToken");

    axios
        .delete("http://localhost:4000/user/signout", {
            headers: { authorization: `Bearer ${accessToken}` },
            "Content-Type": "application/json",
        })
        .then((res) => {
            setLogin(false);
            console.log("탈퇴");
            alert("회원탈퇴가 완료되었습니다.");
            window.location.replace("/");
        })
        .catch((err) => {
            console.log("회원탈퇴 에러", err);
            // alert("잘못된 요청입니다");
        });

    return (
        <>
            <button className="delete" onClick={userDelete}>
                회원 탈퇴
            </button>
        </>
    );
};

export default userDelete;
