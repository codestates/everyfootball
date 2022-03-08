import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function StadiumInfo (props) {

  const matchData = props.matchData.state
  //console.log(matchData)
  
  return (
    <div>
      <div className='stadiumInfo'>
            {matchData.time}
            <div className='stadiumLocation'>
            {matchData.location}
            </div>
            <div className='info'>
              <div className='caution'>구장 특이사항</div>
              <div className='cautionText'>
                ◈모든 매치는 현재 매치 중, 이동 시 마스크 필수 착용입니다◈
              </div>
              <div className='cautionText'>
                ■탁구장 앞 데스크에서 방문대장 작성 및 체온 체크를 하고 구장으로 입장바랍니다.
              </div>
              <div className='cautionText'>
                ■주차: 탁구장 앞 데스크에서 태블릿을 통해 주차 등록 (3시간 무료) / 차량번호 미인식 → 주차권 배부 가능
              </div>
              <div className='cautionText'>
                ■흡연: 흡연부스 외 절대 금연 (흡연구역 외에서 흡연 적발 시 이후 서비스 이용에 제재가 있을 수 있습니다)
              </div>
              <div className='cautionText'>
                ■대여: 풋살화 대여는 구장 안내데스크 직원에게 문의(유료)
              </div>
              <div className='cautionText'>
                ■기타: 해당 구장은 소음 민원 다발 지역이므로 심야 시간 참가자님들께서는 각별히 주의해주시기를 부탁드리겠습니다. 
                <br />
                (1차, 2차 경고시 퇴장 조치 될 수 있습니다.)
              </div>
            </div>
        </div>
    </div>
  );
}
