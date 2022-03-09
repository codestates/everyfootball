import React, { useState } from "react";
import PlayerInfoBox from "./PlayerInfoBox";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import "./PlayerInfo.css";
export default function PlayerInfo() {
    const { state } = useLocation();
    const [text, setText] = useState("신청하기");

    const changeText = (e) => {
        setText((el) => (el === "신청하기" ? "취소하기" : "신청하기"));
    };

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div id="match-player-info">
            <div className="totalPlayer">
                <PlayerInfoBox />
            </div>
            {/* <button onClick={changeText}>{text}</button> */}
            <button
                onClick={() => {
                    if (!localStorage.getItem("accessToken")) {
                        alert("로그인 후 이용 가능합니다.");
                        return;
                    }
                    openModal();
                }}
            >
                신청하기
            </button>
            <Modal open={modalOpen} close={closeModal} header="선수 정보 입력">
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다.
         리액트 함수형 모달 */}
                <div className="modalInfoBox">
                    <div className="title">날짜</div>
                    <div className="modalInfo">{/*state.state.date*/}</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">이름</div>
                    <div className="modalInfo">mainPage/match에서 받아온 이름</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">성별</div>
                    <div className="modalInfo">mainPage/match에서 받아온 성별</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">포지션</div>
                    <div className="modalInfo">mainPage/match에서 받아온 포지션</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">패널티</div>
                    <div className="modalInfo">mainPage/match에서 받아온 패널티</div>
                </div>
            </Modal>
        </div>
    );
}
