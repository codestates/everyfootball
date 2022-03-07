import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

//axios.defaults.withCredentials = true;

export default function PlayerInfolist () {
  

  const [inputs, setInputs] = useState({
    gender: '',
    level: '',
    position: '',
    penalty: '',
  });

  const {  gender, level, position, penalty } = inputs;
  
  const onChange = (e) => {
    const { gender, level, position, penalty, value } = e.target;
 
    const nextInputs = {
      ...inputs,
      [gender]: value,
      // [level]: value,
      // [position]: value,
      // [penalty]: value,
    };
    setInputs(nextInputs)
    // console.log(e.type+":", e.target.value)
  };

  const onReset = () => {
    setInputs({
      gender: '', 
      level: '', 
      position: '', 
      penalty: ''
    });
  };


  return (
    <div>
      <div className='playerList'>
        <div className='player'>선수정보</div>
          <div className='infoBox'>
            {/* <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button> */}
              <input type="text" className = 'pInfo' placeholder="성별" onChange={onChange} value={setInputs.gender} />
              <input type="text" className = 'pInfo' placeholder="레벨" onChange={onChange} value={setInputs.level} />
              <input type="text" className = 'pInfo' placeholder="포지션" onChange={onChange} value={setInputs.position} />
              <input type="text" className = 'pInfo' placeholder="패널티" onChange={onChange} value={setInputs.penalty} />
          </div>    
          <button onClick={onReset}>초기화</button>
          <div>
            <b>값: </b>
            {gender }{level} {position} {penalty}
            {/* {text} */}
          </div>
      </div>
    </div>
  );
}
