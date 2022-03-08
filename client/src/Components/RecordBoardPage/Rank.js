import react from "react";
import "./Rank.css";
import topscore from "./topscore.png";
import assistant from "./assistant.png";
import point from "./mostpoint.png";

export default function Rank({ maxusers }) {
    return (
        <div>
            <div className="totalTopBox">
                <div className="rank-greatest">
                    <div>
                        <h3>에브리풋볼 득점왕</h3>
                    </div>
                    <img className="rank-img" src={topscore} alt="topsore"></img>
                    <div>{`${maxusers.mostgoal.fullname} (${maxusers.mostgoal.userid})`}</div>
                    <div>{`${maxusers.mostgoal.goal} 골`}</div>
                </div>
                <div className="rank-greatest">
                    <div>
                        <h3>에브리풋볼 도움왕</h3>
                    </div>
                    <img className="rank-img" src={assistant} alt="topassist"></img>
                    <div>{`${maxusers.mostassist.fullname} (${maxusers.mostassist.userid})`}</div>
                    <div>{`${maxusers.mostassist.assist} 도움`}</div>
                </div>
                <div className="rank-greatest">
                    <div>
                        <h3>에브리풋볼 최고포인트</h3>
                    </div>
                    <img className="rank-img" src={point} alt="toppoint"></img>
                    <div>{`${maxusers.mostpoint.fullname} (${maxusers.mostpoint.userid})`}</div>
                    <div>{`${maxusers.mostpoint.point} 포인트`}</div>
                </div>
            </div>
        </div>
    );
}
