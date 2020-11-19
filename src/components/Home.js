import React from 'react';
import { Link } from 'react-router-dom';
// import Navigation from './Navigation'
import Menu from './Menu'

class Home extends React.Component {

    state = {
        questionBank : []
    }
    getQuestions = () => {

    }

    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <h1>Welcome to Quiz UP</h1>
                <p>The game made by the future to educate you, bust myths and help you live a long and healthy life!</p>
                <div><button><Link to={"/Menu"}>Click to play</Link></button></div>
            </div>
        )
    }


}

export default Home; 