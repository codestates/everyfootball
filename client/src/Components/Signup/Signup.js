import React from "react";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
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

    const [idExisted, setIdExisted] = useState(false);
    const idExistedCheck = () => {
        let idConfirm = document.querySelector(".id-confirm");
        let idExisted = document.querySelector(".id-existed");
        let idNewed = document.querySelector(".id-new");
        if (isMoreThan4Length() && onlyNumberAndEnglish()) {
            axios
                .post(`${process.env.REACT_APP_API_URL}/user/existedid`, {
                    userid: userId,
                })
                .then((response) => {
                    if (response.data.message === "exist") {
                        idConfirm.classList.add("hide");
                        idExisted.classList.remove("hide");
                        idNewed.classList.add("hide");
                        setIdExisted(false);
                    } else if (response.data.message === "new") {
                        idConfirm.classList.add("hide");
                        idNewed.classList.remove("hide");
                        idExisted.classList.add("hide");
                        setIdExisted(true);
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
    const [gender, setGender] = useState("??????");
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
        idExistedCheck();
        if (isPasswordEquel() && isPasswordValidate() && nameCheck() && phoneNumberCheck() && idExisted) {
            axios
                .post(`${process.env.REACT_APP_API_URL}/user/signup`, {
                    userid: userId,
                    password: password,
                    fullname: name,
                    gender: gender,
                    position: position,
                    preferredtime: matchTime,
                    preferredloca: matchLocation,
                    phonenum: phoneNumber,
                })
                .then((response) => {
                    history.push("/");
                })
                .catch((err) => {
                    throw err;
                });
        }
    };

    return (
        <div>
            <div id="signup-form">
                <div>
                    <div>?????????</div>
                    <div id="id">
                        <div className="inputbox1">
                            <input type="text" onChange={(e) => setUserId(e.target.value)} />
                        </div>
                        <div id="id-check" onClick={idExistedCheck}>
                            ????????????
                        </div>
                    </div>
                    <div className="id-length-fail hide">???????????? ??? ??? ??? ??????????????? ?????????.</div>
                    <div className="id-validate-fail hide">???????????? ?????? ?????? ????????? ???????????????.</div>
                    <div className="id-confirm">??????????????? ????????? ?????????</div>
                    <div className="id-existed hide">????????? ????????? ?????????.</div>
                    <div className="id-new hide">???????????? ?????? ????????? ?????????.</div>
                </div>
                <div>
                    <div>????????????</div>
                    <div className="inputbox">
                        <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>???????????? ??????</div>
                    <div className="inputbox">
                        <input type="password" onChange={(e) => setPasswordRetype(e.target.value)} />
                    </div>
                    <div className="password-mismatch hide">??????????????? ???????????? ????????????.</div>
                    <div className="password-validate-fail hide">
                        ??????????????? ?????? 8??? ??????, ???????????? ?????? ??? ??????????????? ???????????? ?????????.
                    </div>
                </div>
                <div>
                    <div>??????</div>
                    <div className="inputbox">
                        <input type="text" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="name-check hide">????????? ?????????????????????.</div>
                </div>
                <div>
                    <div>??????</div>
                    <div id="button">
                        <div
                            className={gender === "??????" ? "gender-focused" : ""}
                            onClick={(e) => setGender(e.currentTarget.textContent)}
                        >
                            ??????
                        </div>
                        <div
                            className={gender === "??????" ? "gender-focused" : ""}
                            onClick={(e) => setGender(e.currentTarget.textContent)}
                        >
                            ??????
                        </div>
                    </div>
                </div>
                <div>
                    <div>?????????</div>
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
                    <div>????????????</div>
                    <div className="inputbox">
                        <input
                            type="tel"
                            name="tlno"
                            id="tlno"
                            title="??????????????? ???????????????."
                            placeholder="00*-000*-0000"
                            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
                            maxLength="13"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className="phone-check hide">????????? ??????????????? ??????????????????.</div>
                </div>
                <div>
                    <div>??????????????????</div>
                    <div className="inputbox">
                        <input type="date" onChange={(e) => setMatchTime(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>??????????????????</div>
                    <div className="inputbox">
                        <input type="input" onChange={(e) => setMatchLocation(e.target.value)} />
                    </div>
                </div>
                <div id="signup-button" onClick={submit}>
                    <div>????????????</div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
