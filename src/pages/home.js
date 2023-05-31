import React from 'react';
import { Link } from "react-router-dom";

export default function HomeVN(props) {
    return(

  <section id="top-home-section" className="">
    {/* <img src="/breakfast-club/img/homebackground.png" className="img-fluid" alt="Responsive image"></img> */}
    <div id="top-home-container" className="container">
    <div className="">
    <div className="container">
    <div className="translate">
        <p>
        <Link to="/breakfast-club" className=""><strong>English</strong></Link> |&nbsp;
        <Link to="/breakfast-club-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1 className="h1HomeHeaderLeft"><strong>Nutritional Information for King County Food Pantries</strong></h1>
          <h2 className="pHomeLeft">Our most vulnerable populations in King County need more nutritious meals. We're here to help your
          food pantry provide food and meals that will keep your community healthy.</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="/breakfast-club/img/homepagecans.png" className="img-fluid animated" alt="cans"></img>
        </div>
      </div>
    </div>

      {/* <div class="h1HomeHeader">
        <h1>Nutritional Information for King County Food Pantries</h1>
      </div>

      <div class="pHomeHeader">
        <p>
        Our most vulnerable populations in King County need more nutritious meals.
        We’re here to help your food pantry provide food and meals that will keep our communities healthy.
        </p>
      </div> */}
        
      <div className="h1Home">
        <p><strong>Let’s talk nutrition.</strong></p>
      </div>

      <div className="pHome">
        <p>
        To many in King County, food pantries are the only source of consistent food. Additionally, there is a lack of alignment in how the charitable food system defines and tracks the nutritional quality of food.
        </p>
      </div>

      <div className="h1Home">
        <p><strong>We’re here to help bridge the gap.</strong>
        </p>
      </div>

      <div className="pHome">
        <p>
        With our website, your food pantry can...</p>
      </div>

<br></br>
<br></br>

    <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="/breakfast-club/img/homecard1.png" alt="Card image cap"></img>
    <div className="card-body">
      <h5 className="card-title pHomeCenter">View Nutrition</h5>
      <p className="card-text">View nutritional information of common King County food pantry items.</p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="/breakfast-club/img/homecard2.png" alt="Card image cap"></img>    <div className="card-body">
      <h5 className="card-title pHomeCenter">Get Meal Inspiration</h5>
      <p className="card-text">Think about the next healthy meal you’ll provide at your food pantry, made with common items.</p>
    </div>
  </div>
  <div className="card">
  <img className="card-img-top" src="/breakfast-club/img/homecard3.png" alt="Card image cap"></img>    <div className="card-body">
      <h5 className="card-title pHomeCenter">Learn More</h5>
      <p className="card-text">Learn about calores, macronutrients, nutrition facts, and more from the FDA!</p>
    </div>
  </div>
</div>

<div className="h1HomeFinal">
    <p>
      <Link to="/catalog" className="home-final-sentence"><strong>Let's Feed King County.</strong></Link>
    </p>
</div>

<div className="h1Home">
    <p>
    </p>
</div>
      <div className="col d-flex justify-content-center">
      </div>
    </div>
    </div>
  </section>

    );
}