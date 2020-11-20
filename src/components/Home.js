import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css'

class Home extends React.Component {

    state = {
        questionBank : []
    }
    getQuestions = () => {
    
    }

    render() {
        return (
            <div className="home-container">
                <div className="quiz-welcome">
                    <h1 className="quiz-title">Welcome to Quiz UP</h1>
                    <p className="quiz-explanation">The game made by the future to educate you, bust myths and help you live a long and healthy life!</p>
                    <div><Link to={"/Menu"} style={{textDecoration: 'none', padding:'60px' }}>Click to play</Link>   </div>
                    <div className="titleBackground">/</div>
                </div>
            </div>
        )
    }


}

export default Home; 