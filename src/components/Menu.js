import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'


class Menu extends React.Component {

    render () {
        const links = ["Middle Age", "Renaissance", "Prohibition", "Antiquity"]
        return(
            <div className="nav-container">
                <nav>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}><Link to={"/MiddleAge"} style={{textDecoration: 'none'}}>{link}</Link></li>
                        ) )}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu;