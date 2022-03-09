import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

export default function Modal({ open, close, header }) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴

    const requestJoin = () => {
        axios
            .get(`http://localhost:4000/match/joinmatch/${localStorage.getItem("matchid")}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res) => {
                console.log(res.data);
            });
    };
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? "openModal modal" : "modal"}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button
                            className="close"
                            onClick={() => {
                                close();
                                requestJoin();
                            }}
                        >
                            &times;
                        </button>
                    </header>
                    <main>ssdd</main>
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
