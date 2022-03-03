import react from 'react'
import './Match.css'
import { Link } from 'react-router-dom'

const Match = ({date, location, gender, headCount}) => {
    return (
        <div className="row">
        <div className="col">
          ⏲️ {date}
        </div>
        <div className="col">
          🏟️ {location}
        </div>
        <div className="col">
          {gender}
        </div>
        <div className="col">
          {headCount}
        </div>
        <div className="col">
          <button>
            <Link to="/matchui">예약하기</Link>
          </button>
        </div>
      </div>  
            )
}

export default Match;