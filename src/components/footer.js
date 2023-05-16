import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div class="footer">
            <div><image class="logo"/></div>
            <div class="title">BREAKFAST CLUB</div>
            <div class="footerLinks">
                <Link to="/Home">Home</Link>
                <Link to="/About">About Us</Link>
            </div>
            <div>
                <p>&copy;INFO 442 The Breakfast Club 2023 iSchool</p>
            </div>
        </div>
    )
}