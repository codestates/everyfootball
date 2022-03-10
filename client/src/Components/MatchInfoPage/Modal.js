import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

export default function Modal({ open, close, header, myData }) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const requestJoin = () => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/match/joinmatch/${localStorage.getItem("matchid")}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                if (res.data.message === "마감") {
                    alert("신청이 마감된 경기입니다.");
                } else if (res.data.message === "Already joined!") {
                    alert("이미 신청하였습니다.");
                } else if (res.data.message === "has joined match") {
                    alert("신청이 완료되었습니다.");
                    window.location.replace("/matchinfo");
                } else if (res.data.message === "Login first!") {
                    alert("로그인이 필요합니다.");
                }
            });
    };
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section id="modal-section">
                    <header>
                        {header}
                        <button
                            className="close"
                            onClick={() => {
                                close();
                            }}
                        >
                            &times;
                        </button>
                    </header>
                    <main>선수정보가 맞는지 확인해주세요</main>
                    <div>
                        <li>아이디 : {myData.data.userid}</li>
                        <li>이름 : {myData.data.fullname}</li>
                        <li>선호포지션 : {myData.data.position}</li>
                        <li>패널티 : {myData.data.penalty} 회</li>
                        <li>총득점 : {myData.data.totalGoal} 골</li>
                        <li>어시스트 : {myData.data.totalAssist} 회</li>
                        <li>유효슈팅 : {myData.data.totalShooting} 회</li>
                    </div>

                    <footer>
                        <button
                            className="join"
                            onClick={() => {
                                close();
                                requestJoin();
                            }}
                        >
                            신청하기
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}
