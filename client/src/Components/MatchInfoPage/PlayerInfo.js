import React, { useState } from "react";
import PlayerInfoBox from "./PlayerInfoBox";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import "./PlayerInfo.css";
import axios from "axios";
export default function PlayerInfo({ usersinfo }) {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    const [myData, setMyData] = useState({
        data: {
            userid: "",
            fullname: "",
            position: "",
            penalty: "",
            totalGoal: "",
            totalAssist: "",
            totalShooting: "",
        },
    });

    return (
        <div id="match-player-info">
            <div className="totalPlayer">
                <PlayerInfoBox usersinfo={usersinfo} />
            </div>
            <button
                onClick={() => {
                    if (!localStorage.getItem("accessToken")) {
                        alert("로그인 후 이용 가능합니다.");
                        window.location.replace("/login");
                        return;
                    }
                    axios
                        .get("http://localhost:4000/user/myinfo", {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                            },
                        })
                        .then((res) => {
                            setMyData(res.data);
                            console.log(myData);
                        });
                    openModal();
                }}
                class="submit-button"
            >
                신청하기
            </button>
            <button
                class="submit-button"
                onClick={() => {
                    if (!localStorage.getItem("accessToken")) {
                        alert("로그인 후 이용 가능합니다.");
                        window.location.replace("/login");
                        return;
                    }
                    axios
                        .get(`http://localhost:4000/match/leavematch/${localStorage.getItem("matchid")}`, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                            },
                        })
                        .then((res) => {
                            console.log(res.data.message);
                            if (res.data.message === "not in match") {
                                alert("해당 매치에 신청된 상태가 아닙니다.");
                            } else if (res.data.message === "leaved from match") {
                                alert("취소되었습니다.");
                                window.location.replace("/matchinfo");
                            }
                        });
                }}
            >
                취소하기
            </button>
            <Modal open={modalOpen} close={closeModal} header="선수 정보 확인" myData={myData}></Modal>
        </div>
    );
}
