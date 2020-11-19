import React from 'react';
import {Link} from 'react-router-dom';

const ScoreCard = ({score, total, reset}) => {
    return(
        <div>
            <h4>Your Score</h4>
            <h5>{score}/{total}</h5>
            <button><Link to="/">Return to home</Link></button>
            <button onClick={reset}>Try Again</button>
        </div>
    )
}

export default ScoreCard;