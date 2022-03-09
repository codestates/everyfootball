import React, { useState } from "react";
import "./StadiumInfo.css";
export default function StadiumInfo({ groundinfo }) {
    return (
        <div>
            <div className="stadium-info">
                <div className="info">
                    ◈모든 매치는 현재 매치 중, 이동 시 마스크 필수 착용입니다
                    <br />
                    ■탁구장 앞 데스크에서 방문대장 작성 및 체온 체크를 하고 구장으로 입장바랍니다.
                    <br />
                    ■구장 이름 : {groundinfo.groundpayload.name}
                    <br />
                    ■장소 : {groundinfo.groundpayload.location}
                    <br />
                    ■주차여부 : {groundinfo.groundpayload.parking}
                    <br />
                    {`샤워 ${groundinfo.groundpayload.shower}, 화장실 ${groundinfo.groundpayload.toilet}`}
                    <br />
                    ■대여 : 풋살화 대여는 구장 안내데스크 직원에게 문의(유료)
                    <br />
                    ■기타 : 해당 구장은 소음 민원 다발 지역이므로 심야 시간 참가자님들께서는 각별히 주의해주시기를
                    부탁드리겠습니다. <br />
                    (1차, 2차 경고시 퇴장 조치 될 수 있습니다.)
                </div>
            </div>
        </div>
    );
}
