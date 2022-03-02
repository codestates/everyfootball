import react from 'react'
import './Matchlist.css'
import Match from './Match'

const Matchlist = () => {
    const dummyData = [
        {
            date : '02일(수) 14:00',
            location : '신안산 풋살파크(신안산대학교)',
            gender : '남자',
            headCount : '6',
        },
        {
            date : '02일(수) 16:00',
            location : '신안산 풋살파크(신안산대학교)',
            gender : '여자',
            headCount : '8',
        },
        {
            date : '03일(목) 13:00',
            location : '신안산 풋살파크(신안산대학교)',
            gender : '혼성',
            headCount : '6',
        },
        {
            date : '03일(목) 15:00',
            location : '신안산 풋살파크(신안산대학교)',
            gender : '여자',
            headCount : '6',
        },
        {
            date : '02일(수) 16:00',
            location : '신안산 풋살파크(신안산대학교)',
            gender : '남자',
            headCount : '10',
        },
    ]

    return (<div id="matchlist">
        {dummyData.map((info, i) => {
        return <Match key={i} date={info.date} location={info.location} 
                gender={info.gender} headCount={info.headCount}/>
    })}
    </div>)
}

export default Matchlist;