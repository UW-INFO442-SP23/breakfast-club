import React from 'react';
import { Link } from "react-router-dom";

export default function AboutUs(props) {
    return (
        <section>
        <div className="translate">
            <p>
                <Link to="/about" className=""><strong>English</strong></Link> |&nbsp;
                <Link to="/about-vn" className=""><strong>Tiếng Việt</strong></Link>
            </p>
        </div>
            <h1>About Us</h1>
            <br></br>
        <div className="paragraphDiv">
            <p>We’re Team Breakfast Club! For our Spring 2023 INFO 442 project at the University of Washington, we decided to tackle the United Nations’ second sustainable development goal: Zero Hunger.</p>
        </div>

        <div className="paragraphDiv">
            <p>We decided to take on this goal at a local level. So we asked: <strong>How might we connect restaurants with food banks to provide the low-income community in King County with access to free, high-quality, healthy food?</strong></p>
        </div>

        <div className="paragraphDiv">
            <p>This website is our answer to that question.</p>
        </div>

        <div className="pt-3 pb-4">
        <div className="container">
            <div className="row mt-4">
                <div className="col text-center">
                <h3>
                    Meet our team!
                </h3>
                </div>
            <br></br>
            <br></br>
            </div>
            <div className="row">
                <div className="col-md-4 text-center">
                <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/kenny.png" alt="Kenny Pham"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Kenny Pham
                </p>
        
                </div>
                <div className="col-md-4 text-center">
                <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/aman.png" alt="Aman Brar"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Aman Brar
                </p>
        
                </div>
                <div className="col-md-4 text-center">
                    
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/cheryl.png" alt="Cheryl Feng"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Cheryl Feng
                    </p>
                </div>
            </div>
        
            <div className="row mb-md-3">
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/jenny.png" alt="Yawen (Jenny) Guo"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Yawen (Jenny) Guo
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/travon.png" alt="Travon Dao"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Travon Dao
                    </p>
                </div>
                <div className="col-md-4 text-center">
                    <img className="img-fluid qualities-img p-4" src="./breakfast-club/img/aboutfiller.png" alt="Team Logo"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    {/* name */}
                    </p>
                </div>
            </div>
        </div>
        </div>
        
        </section>
    );

}