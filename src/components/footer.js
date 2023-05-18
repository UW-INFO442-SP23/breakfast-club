import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="footer row">
            <div className="col-2 imgDiv"><img className="logo" src="img/Icon_vegetables.png" alt="Tomato and cucumber logo"/></div>
            <div className="title col-3">BREAKFAST CLUB</div>
            <div className="footerLinks col-3">
                <ul className="footerList">
                    <li><NavLink to="/" >Home</NavLink></li>
                    <li><NavLink to="/About" activeclassname="active">About Us</NavLink></li>
                </ul>
            </div>
            <div className="col-4 projectInfo">
                <p>&copy;2023 INFO 442 Breakfast Club</p>
            </div>
        </div>
    )
}