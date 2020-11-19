import React from 'react';
import {Link} from 'react-router-dom';
import MiddleAge from './MiddleAge';

class Menu extends React.Component {

    render () {
        const links = ["Middle Age", "Renaissance", "Prohibition", "Antiquity"]
        return(
            <nav>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}><button><Link to={"/MiddleAge"}>{link}</Link></button></li>
                     ) )}
                </ul>
            </nav>
        )
    }
}

export default Menu;