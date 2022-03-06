import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [id, setId] = useState("");
    const idCheck = (event) => {
        setId(event.target.value);
        let idLengthFail = document.querySelector(".id-length-fail");
        if (id.length < 4) {
            idLengthFail.classList.remove("hide");
        } else {
            idLengthFail.classList.add("hide");
        }

        let idValidateFail = document.querySelector(".id-validate-fail");
        if (/^[A-Za-z][A-Za-z0-9]*$/.test(id)) {
            idValidateFail.classList.add("hide");
        } else {
            idValidateFail.classList.remove("hide");
        }
    };

    const idExistedCheck = () => {
        let idConfirm = document.querySelector(".id-confirm");
        idConfirm.classList.add("hide");
        let idExisted = document.querySelector(".id-existed");
        let idNewed = document.querySelector(".id-new");
        axios
            .post("http://localhost:4000/user/existedid", {
                userid: id,
            })
            .then((response) => {
                if (response.data.message === "exist") {
                    idConfirm.classList.add("hide");
                    idExisted.classList.remove("hide");
                } else if (response.data.message === "new") {
                    console.log("newid");
                    idConfirm.classList.add("hide");
                    idNewed.classList.remove("hide");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRetype] = useState("");

    const passwordCheck = (event) => {
        setPasswordRetype(event.target.value);

        let passwordMismatch = document.querySelector(".password-mismatch");
        let passwordValidateFail = document.querySelector(".password-validate-fail");

        if (password === passwordRetype) {
            passwordMismatch.classList.add("hide");
        } else {
            passwordMismatch.classList.remove("hide");
        }

        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            passwordValidateFail.classList.add("hide");
        } else {
            passwordValidateFail.classList.remove("hide");
        }
    };

    const [name, setName] = useState("");
    const [gender, setGender] = useState("남");
    const [position, setPosition] = useState("FW");
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [phoneNumber3, setPhoneNumber3] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [matchLocation, setMatchLocation] = useState("");

    const history = useHistory();
    const submit = () => {
        axios
            .post("http://localhost:4000/user/signup", {
                id,
                password,
                passwordCheck: passwordRetype,
                name,
                gender,
                position,
                matchtime: matchTime,
                matchlocation: matchLocation,
                phonenumber: `${phoneNumber1}-${phoneNumber2}-${phoneNumber3}`,
            })
            .then((response) => {
                alert("가입성공");
                history.push("/");
            });
    };

    return (
        <form>
            <ul>
                <li>
                    <label>
                        아이디{" "}
                        <input
                            type="text"
                            value={id}
                            onChange={(event) => {
                                idCheck(event);
                            }}
                        ></input>
                    </label>
                    <button onClick={idExistedCheck}>중복확인</button>
                </li>
                <div class="id-length-fail hide">아이디는 네 글 자 이상이여야 합니다.</div>
                <div class="id-validate-fail hide">아이디는 영어 또는 숫자만 가능합니다.</div>
                <div class="id-confirm">중복검사를 진행해 주세요</div>
                <div class="id-existed hide">중복된 아이디 입니다.</div>
                <div class="id-new hide">생성 가능한 아이디 입니다.</div>
                <li>
                    <label>
                        비밀번호 <input type="password" onChange={(event) => setPassword(event.target.value)}></input>
                    </label>
                </li>
                <li>
                    <label>
                        비밀번호 확인 <input type="password" onChange={(event) => passwordCheck(event)}></input>
                    </label>
                </li>
                <div class="password-mismatch hide">비밀번호가 일치하지 않습니다.</div>
                <div class="password-validate-fail hide">
                    비밀번호는 최소 8자 이상, 알파벳과 숫자 및 특수문자를 포함해야 합니다.
                </div>
                <li>
                    <label>
                        이름 <input type="text" onChange={(event) => setName(event.target.value)} />
                    </label>
                </li>
                <li>
                    <label>
                        성별
                        <input
                            type="radio"
                            name="gender"
                            value="남"
                            onChange={(event) => setGender(event.target.value)}
                        />
                        남
                        <input
                            type="radio"
                            name="gender"
                            value="여"
                            onChange={(event) => setGender(event.target.value)}
                        />
                        여
                    </label>
                </li>
                <li>
                    <label>
                        포지션{" "}
                        <input
                            type="radio"
                            name="position"
                            value="FW"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        FW
                        <input
                            type="radio"
                            name="position"
                            value="MF"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        MF
                        <input
                            type="radio"
                            name="position"
                            value="DF"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        DF
                        <input
                            type="radio"
                            name="position"
                            value="GK"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        GK
                    </label>
                </li>
                <li>
                    <label>
                        전화번호
                        <input
                            type="tel"
                            pattern="[0-9]{2,3}"
                            maxLength="3"
                            placeholder="예) 010"
                            onChange={(event) => setPhoneNumber1(event.target.value)}
                        />
                        -
                        <input
                            type="tel"
                            pattern="[0-9]{3,4}"
                            maxLength="4"
                            placeholder="예) 123, 1234"
                            onChange={(event) => setPhoneNumber2(event.target.value)}
                        />
                        -
                        <input
                            type="tel"
                            pattern="[0-9]{4}"
                            maxLength="4"
                            placeholder="예) 1234"
                            onChange={(event) => setPhoneNumber3(event.target.value)}
                        />
                    </label>
                </li>
                <li>
                    <label>
                        선호경기시간 <input type="time" onChange={(event) => setMatchTime(event.target.value)}></input>
                    </label>
                    <label>
                        선호경기위치{" "}
                        <input type="text" onChange={(event) => setMatchLocation(event.target.value)}></input>
                    </label>
                </li>
            </ul>
            <button onClick={submit}>가입</button>
            {gender}
            {position}
        </form>
    );
};

export default Signup;
