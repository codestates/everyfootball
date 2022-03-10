import React, { useEffect, useState } from "react";
import Rank from "./Rank";
import Board from "./Board";
import "./RecordBoard.css";

export default function RecordBoard() {
    const [recordData, setRecordData] = useState({
        maxusers: {
            mostassist: {
                assist: 0,
                fullname: "000",
                userid: "000",
            },
            mostgoal: {
                fullname: "000",
                goal: 0,
                userid: "000",
            },
            mostpoint: {
                fullname: "0000",
                point: 0,
                userid: "0000",
            },
        },
        topusers: [
            {
                0: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                1: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                2: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                3: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                4: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                5: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                6: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                7: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                8: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
            {
                9: {
                    userid: "1111",
                    password: "1111",
                    fullname: "1111",
                    gender: "1",
                    phonenum: "11",
                },
            },
        ],
    });
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/match/record`)
            .then((res) => res.json())
            .then((res) => {
                setRecordData(res.data);
            });
    }, []);

    return (
        <div id="recordboard">
            <Rank maxusers={recordData.maxusers} />
            <Board topusers={recordData.topusers} />
        </div>
    );
}
