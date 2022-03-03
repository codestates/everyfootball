import React from "react";
import UserinfoRecord from "./UserinfoRecord";
import "./UserinfoFormList.css";

function UserinfoRecordList() {
    const dummyData = [
        {
            game: 4,
            goal: 10,
            assist: 4,
            penalty: 0,
        },
    ];
    return (
        <div id="UserinfoRecordList">
            <div>
                <h4>개인 기록</h4>
                {dummyData.map((persnal, i) => {
                    return (
                        <UserinfoRecord
                            key={i}
                            game={persnal.game}
                            goal={persnal.goal}
                            assist={persnal.assist}
                            penalty={persnal.penalty}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default UserinfoRecordList;
