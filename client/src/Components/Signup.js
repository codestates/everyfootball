import React from 'react';
import './Signup.css'
const Signup = () => {

    return (
            <form>
                <ul>
                <li><label>아이디 <input type="text"></input></label></li>
                <li><label>비밀번호 <input type="password"></input></label></li>
                <li><label>비밀번호 확인 <input type="password"></input></label></li>
                <li>
                    <label>
                        이름 <input type="text"/>
                    </label>
                </li>
                <li>
                    <label>
                        성별 
                        <input type="radio" name="gender"/>남
                        <input type="radio" name="gender"/>여
                    </label>
                </li>
                <li>
                    <label>
                        포지션 <input type="radio" name="position"/>FW
                              <input type="radio" name="position"/>MF
                              <input type="radio" name="position"/>DF
                              <input type="radio" name="position"/>GK
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
                        />
                        -
                        <input
                        type="tel"
                        pattern="[0-9]{3,4}"
                        maxLength="4"
                        placeholder="예) 123, 1234"
                        />
                        -
                        <input
                        type="tel"
                        pattern="[0-9]{4}"
                        maxLength="4"
                        placeholder="예) 1234"
                        />
                    </label>
                </li>
                <li>
                    <label>선호경기시간 <input type="time"></input></label>
                    <label>선호경기위치 <input type="text"></input></label>
                </li>
                </ul>
                <button>가입</button>
            </form>
    )
}

export default Signup;