import React from 'react';
import {Link} from 'react-router-dom';
import '../components/ScoreCard.css'

const ScoreCard = ({score, total, reset}) => {
    return(
        <div className="score-container">
                <h4 className="final-score">Your Score: {score}/{total}</h4>
            <div className="score-summary">
                <button className="score-title"><Link className="home-links" to="/">Return to home</Link></button>
                <button className="score-title" onClick={reset}><Link className="home-links">Try Again</Link></button>
            </div>
        </div>
    )
}

export default ScoreCard;