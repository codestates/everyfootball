import React, { useState } from 'react';
import PlayerInfoBox from './PlayerInfoBox';
import Modal from './Modal'
import { useLocation } from 'react-router-dom';


export default function PlayerInfo () {

  const {state} = useLocation();
  const [text, setText] = useState("신청하기");
  
  const changeText = (e) => {
    setText(el => el === "신청하기" ? "취소하기" : "신청하기" );
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // axios
  //   .get(`https://jsonplaceholder.typicode.com/users/`, {
  //       headers: { authorization: `Bearer ${accessToken}` },
  //       "Content-Type": "application/json",
  //   })
  //   .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       setUserinfo(res);
  //       console.log("개인정보수정 성공");
  //   })
  //   .catch((err) => {
  //       console.log("개인정보수정 에러", err);
  //   });



  return (
    <div>
      <div className='totalPlayer'>
        <PlayerInfoBox />
      </div>
      {/* <button onClick={changeText}>{text}</button> */}
      <button onClick={openModal}>신청하기</button>
      <Modal open={modalOpen} close={closeModal} header="선수 정보 입력">
        {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다.
         리액트 함수형 모달 */}
          <div className='modalInfoBox'>
            <div className='title'>날짜</div>
            <div className='modalInfo'>{state.state.date}</div>       
          </div>
          <div className='modalInfoBox'>
            <div className='title'>이름</div>
            <div className='modalInfo'>mainPage/match에서 받아온 이름</div>
          </div>
          <div className='modalInfoBox'>
            <div className='title'>성별</div>
            <div className='modalInfo'>mainPage/match에서 받아온 성별</div>       
          </div>
          <div className='modalInfoBox'>
            <div className='title'>포지션</div>
            <div className='modalInfo'>mainPage/match에서 받아온 포지션</div>       
          </div>
          <div className='modalInfoBox'>
            <div className='title'>패널티</div>
            <div className='modalInfo'>mainPage/match에서 받아온 패널티</div>       
          </div>
      </Modal>
    </div>
  );
}
