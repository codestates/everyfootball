import React, { useEffect, useState } from "react";
import PlayerInfoBox from "./PlayerInfoBox";
import Modal from "./Modal";
import axios from "axios";

export default function PlayerInfo(props) {
    const accessToken = localStorage.getItem("accessToken");

    const matchData = props.matchData.state;
    //console.log(matchData)

    const [text, setText] = useState("신청하기");

    const [userInfo, setUserInfo] = useState(null);

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    //axios 랑 이 방법의 차이
    // const getGroundData = async (id) => {
    //     const response = await axios.get(`http://localhost:4000/match/data/${id}?matchid=${id}`);
    //     //console.log(response.data)
    //     setGroundData(response.data.data.groundinfo);
    // };

    const getUserInfo = async () => {
        const response = await axios.get(`http://localhost:4000/user/userinfo`, {
            headers: { authorization: `Bearer ${accessToken}` },
        });
        //console.log(response.data)
        setUserInfo(response.data.data.userInfo);
    };

    useEffect(() => {
        getUserInfo();
    }, []);
    console.log("userInfo", userInfo);

    if (userInfo === null) {
        return <>로딩중</>;
    }
    return (
        <div>
            <div className="totalPlayer">
                <PlayerInfoBox />
            </div>
            <button onClick={openModal}>신청하기</button>
            <Modal open={modalOpen} close={closeModal} header="신청 정보 확인" matchData={matchData}>
                <div className="modalInfoBox">
                    <div className="title">날짜</div>
                    <div className="modalInfo">{matchData.time}</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">이름</div>
                    <div className="modalInfo">{userInfo.fullname}</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">성별</div>
                    <div className="modalInfo">{userInfo.gender}</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">포지션</div>
                    <div className="modalInfo">{userInfo.position}</div>
                </div>
                <div className="modalInfoBox">
                    <div className="title">패널티</div>
                    <div className="modalInfo">{userInfo.penalty}</div>
                </div>
            </Modal>
        </div>
    );
}
