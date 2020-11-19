import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

    state = {
        questionBank : []
    }
    getQuestions = () => {
    
    }

    render() {
        return (
            <div>
                <h1>Welcome to Quiz UP</h1>
                <p>The game made by the future to educate you, bust myths and help you live a long and healthy life!</p>
                <div><button><Link to={"/Menu"}>Click to play</Link></button></div>
            </div>
        )
    }


}

export default Home; 