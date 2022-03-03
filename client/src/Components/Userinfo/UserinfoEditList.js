import React from "react";
import UserinfoEdit from "./UserinfoEdit";
import "./UserinfoFormList.css";

function UserinfoEditList() {
    const dummyData = [
        {
            name: " 홍길동",
            userId: "honggildong123",
            preferLocation: "서울",
            preferTime: 6,
            position: "공격수",
            gender: "남자",
            birth: "19960101",
        },
    ];
    return (
        <div id="UserinfoEditList">
            <div>
                <button>수정</button>
                <button>회원탈퇴</button>
            </div>
            <div>
                <h4>개인 정보</h4>
                {dummyData.map((info, i) => {
                    return (
                        <UserinfoEdit
                            key={i}
                            name={info.name}
                            userId={info.userId}
                            preferLocation={info.preferLocation}
                            preferTime={info.preferTime}
                            position={info.position}
                            gender={info.gender}
                            birth={info.birth}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserinfoEditList;
