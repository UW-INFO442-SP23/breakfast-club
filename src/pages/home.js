import React from 'react';
import { Link } from "react-router-dom";


export default function Home(props) {
    return(

  <section id="top-home-section" class="">
    <img src="/img/homebackground.png" class="img-fluid" alt="Responsive image"></img>
    <div id="top-home-container" class="container">
    <div class="">
      
      {/* <div class="h1HomeHeader">
        <h1>Nutritional Information for King County Food Pantries</h1>
      </div>

      <div class="pHomeHeader">
        <p>
        Our most vulnerable populations in King County need more nutritious meals.
        We’re here to help your food pantry provide food and meals that will keep our communities healthy.
        </p>
      </div> */}

      <div class="h1Home">
        <p>
        Let’s talk nutrition.
        </p>
      </div>

      <div class="pHome">
        <p>
        To many in King County, food pantries are the only source of consistent food. 
        </p>
      </div>

      <div class="pHome">
        <p>
        Additionally...
        </p>
      </div>

      <div class="pHome">
        <p>
        There is a lack of alignment in how the charitable food system
        defines and tracks the nutritional quality of food.
        </p>
      </div>

      <div class="h1Home">
        <p>
        We’re here to help bridge the gap.
        </p>
      </div>

      <div class="pHome">
        <p>
        With our website, your food pantry can...</p>
      </div>

<br></br>
<br></br>

    <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="/img/homecard1.png" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title pHomeCenter">View Nutrition</h5>
      <p class="card-text">View nutritional information of common King County food pantry items.</p>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src="/img/homecard2.png" alt="Card image cap"></img>    <div class="card-body">
      <h5 class="card-title pHomeCenter">Get Meal Inspiration</h5>
      <p class="card-text">Think about the next healthy meal you’ll provide at your food pantry, made with common items.</p>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src="/img/homecard3.png" alt="Card image cap"></img>    <div class="card-body">
      <h5 class="card-title pHomeCenter">Learn More</h5>
      <p class="card-text">Learn about calores, macronutrients, nutrition facts, and more from the FDA!</p>
    </div>
  </div>
</div>

<div class="h1HomeFinal">
    <p>
    <Link to="/Catalog" className="home-final-sentence">Let's feed King County.</Link>
    </p>
</div>

<div class="h1Home">
    <p>
    </p>
</div>

      <div class="col d-flex justify-content-center">
      </div>
    </div>
    </div>
  </section>

    );
}