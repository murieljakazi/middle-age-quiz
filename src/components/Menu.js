import React from 'react';
import {Link} from 'react-router-dom';

class Menu extends React.Component {

    render () {
        const links = ["Middle Age", "Renaissance", "Prohibition", "Antiquity"]
        return(
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><button><Link to={link}></Link>{link}</button></li>
                     ) )}
                </ul>
            </nav>
        )
    }
}

export default Menu;