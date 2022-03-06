import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [userId, setUserId] = useState("");

    const isMoreThan4Length = () => {
        let idLengthFail = document.querySelector(".id-length-fail");
        if (userId.length < 4) {
            idLengthFail.classList.remove("hide");
            return false;
        } else {
            idLengthFail.classList.add("hide");
            return true;
        }
    };

    const onlyNumberAndEnglish = () => {
        let idValidateFail = document.querySelector(".id-validate-fail");
        if (/^[A-Za-z][A-Za-z0-9]*$/.test(userId)) {
            idValidateFail.classList.add("hide");
            return true;
        } else {
            idValidateFail.classList.remove("hide");
            return false;
        }
    };

    const idExistedCheck = () => {
        let idConfirm = document.querySelector(".id-confirm");
        let idExisted = document.querySelector(".id-existed");
        let idNewed = document.querySelector(".id-new");
        if (isMoreThan4Length() && onlyNumberAndEnglish()) {
            axios
                .post("http://localhost:4000/user/existedid", {
                    userid: userId,
                })
                .then((response) => {
                    if (response.data.message === "exist") {
                        idConfirm.classList.add("hide");
                        idExisted.classList.remove("hide");
                        return false;
                    } else if (response.data.message === "new") {
                        idConfirm.classList.add("hide");
                        idNewed.classList.remove("hide");
                        return true;
                    }
                })
                .catch((err) => {
                    throw err;
                });
        }
    };

    const [password, setPassword] = useState("");
    const [passwordRetype, setPasswordRetype] = useState("");

    const isPasswordEquel = () => {
        let passwordMismatch = document.querySelector(".password-mismatch");

        if (password === passwordRetype) {
            passwordMismatch.classList.add("hide");
            return true;
        } else {
            passwordMismatch.classList.remove("hide");
            return false;
        }
    };
    const isPasswordValidate = () => {
        let passwordValidateFail = document.querySelector(".password-validate-fail");

        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)) {
            passwordValidateFail.classList.add("hide");
            return true;
        } else {
            passwordValidateFail.classList.remove("hide");
            return false;
        }
    };

    const [name, setName] = useState("");
    const [gender, setGender] = useState("남성");
    const [position, setPosition] = useState("FW");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [matchTime, setMatchTime] = useState("");
    const [matchLocation, setMatchLocation] = useState("");

    const nameCheck = () => {
        const nameRequired = document.querySelector(".name-check");
        if (name === "") {
            nameRequired.classList.remove("hide");
            return false;
        } else {
            nameRequired.classList.add("hide");
            return true;
        }
    };

    const phoneNumberCheck = () => {
        const phoneCheck = document.querySelector(".phone-check");
        if (/^\d{3}-\d{3,4}-\d{4}$/.test(phoneNumber)) {
            phoneCheck.classList.add("hide");
            return true;
        } else {
            phoneCheck.classList.remove("hide");
            return false;
        }
    };

    const history = useHistory();

    const submit = () => {
        isMoreThan4Length();
        isPasswordEquel();
        isPasswordValidate();
        onlyNumberAndEnglish();
        nameCheck();
        phoneNumberCheck();
        idExistedCheck();
        if (
            isMoreThan4Length() &&
            isPasswordEquel() &&
            isPasswordValidate() &&
            onlyNumberAndEnglish() &&
            nameCheck() &&
            idExistedCheck() &&
            phoneNumberCheck()
        ) {
            axios
                .post("http://localhost:4000/user/signup", {
                    userid: userId,
                    password,
                    passwordCheck: passwordRetype,
                    fullname: name,
                    gender,
                    position,
                    matchtime: matchTime,
                    matchlocation: matchLocation,
                    phonenumber: phoneNumber,
                })
                .then((response) => {
                    history.push("/");
                });
        }
    };

    return (
        <div>
            <div id="signup-form">
                <div>
                    <div>아이디</div>
                    <div id="id">
                        <div class="inputbox1">
                            <input type="text" onChange={(e) => setUserId(e.target.value)} />
                        </div>
                        <div id="id-check" onClick={idExistedCheck}>
                            중복확인
                        </div>
                    </div>
                    <div class="id-length-fail hide">아이디는 네 글 자 이상이여야 합니다.</div>
                    <div class="id-validate-fail hide">아이디는 영어 또는 숫자만 가능합니다.</div>
                    <div class="id-confirm">중복검사를 진행해 주세요</div>
                    <div class="id-existed hide">중복된 아이디 입니다.</div>
                    <div class="id-new hide">생성 가능한 아이디 입니다.</div>
                </div>
                <div>
                    <div>비밀번호</div>
                    <div class="inputbox">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>비밀번호 확인</div>
                    <div class="inputbox">
                        <input type="password" onChange={(e) => setPasswordRetype(e.target.value)} />
                    </div>
                    <div class="password-mismatch hide">비밀번호가 일치하지 않습니다.</div>
                    <div class="password-validate-fail hide">
                        비밀번호는 최소 8자 이상, 알파벳과 숫자 및 특수문자를 포함해야 합니다.
                    </div>
                </div>
                <div>
                    <div>이름</div>
                    <div class="inputbox">
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="name-check hide">이름은 필수입력입니다.</div>
                </div>
                <div>
                    <div>성별</div>
                    <div id="button">
                        <div
                            className={gender === "남성" ? "gender-focused" : ""}
                            onClick={(e) => setGender(e.currentTarget.textContent)}
                        >
                            남성
                        </div>
                        <div
                            className={gender === "여성" ? "gender-focused" : ""}
                            onClick={(e) => setGender(e.currentTarget.textContent)}
                        >
                            여성
                        </div>
                    </div>
                </div>
                <div>
                    <div>포지션</div>
                    <div id="button">
                        <div
                            className={position === "FW" ? "position-focused" : ""}
                            onClick={(e) => setPosition(e.currentTarget.textContent)}
                        >
                            FW
                        </div>
                        <div
                            className={position === "MF" ? "position-focused" : ""}
                            onClick={(e) => setPosition(e.currentTarget.textContent)}
                        >
                            MF
                        </div>
                        <div
                            className={position === "DF" ? "position-focused" : ""}
                            onClick={(e) => setPosition(e.currentTarget.textContent)}
                        >
                            DF
                        </div>
                        <div
                            className={position === "GK" ? "position-focused" : ""}
                            onClick={(e) => setPosition(e.currentTarget.textContent)}
                        >
                            GK
                        </div>
                    </div>
                </div>
                <div>
                    <div>전화번호</div>
                    <div class="inputbox">
                        <input
                            type="tel"
                            name="tlno"
                            id="tlno"
                            title="전화번호를 입력하세요."
                            placeholder="00*-000*-0000"
                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                            maxLength="13"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div class="phone-check hide">올바른 전화번호를 입력해주세요.</div>
                </div>
                <div>
                    <div>선호경기시간</div>
                    <div class="inputbox">
                        <input type="text" onChange={setMatchTime} />
                    </div>
                </div>
                <div>
                    <div>선호경기위치</div>
                    <div class="inputbox">
                        <input type="text" onChange={setMatchLocation} />
                    </div>
                </div>
                <div id="signup-button" onClick={submit}>
                    <div>가입하기</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
