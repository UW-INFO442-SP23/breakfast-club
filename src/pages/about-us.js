import React from 'react';
export default function AboutUs(props) {
    return (
        <section>
            <br></br>
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

        <div class="pt-3 pb-4">
        <div class="container">
            <div class="row mt-4">
                <div class="col text-center">
                <h3>
                    Meet our team!
                </h3>
                </div>
            <br></br>
            <br></br>
            </div>
            <div class="row">
                <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4" src="img/kenny.png"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Kenny Pham
                </p>
        
                </div>
                <div class="col-md-4 text-center">
                <img class="img-fluid qualities-img p-4" src="img/aman.png"></img>
                <h5>
                    {/* position */}
                </h5>
                <p>
                    Aman Brar
                </p>
        
                </div>
                <div class="col-md-4 text-center">
                    
                    <img class="img-fluid qualities-img p-4" src="img/cheryl.png"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Cheryl Feng
                    </p>
                </div>
            </div>
        
            <div class="row mb-md-3">
                <div class="col-md-4 text-center">
                    <img class="img-fluid qualities-img p-4" src="img/jenny.png"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Yawen (Jenny) Guo
                    </p>
                </div>
                <div class="col-md-4 text-center">
                    <img class="img-fluid qualities-img p-4" src="img/travon.png"></img>
                    <h5>
                    {/* position */}
                    </h5>
                    <p>
                    Travon Dao
                    </p>
                </div>
                <div class="col-md-4 text-center">
                    <img class="img-fluid qualities-img p-4" src="img/aboutfiller.png"></img>
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