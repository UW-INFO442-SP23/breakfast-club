import React from 'react';
export default function Guidelines(props) {

  return (
      <section>
        <h1>Dietary Guidelines</h1>
        <div className='dgadiv'>
            <img className='dgaimg' src='./breakfast-club/img/dgaguidelines.jpg' alt='dga guidelines'></img>
            <div className='dgatextcontainer'>
              <p className='dgadescr'>This is an infographic taken from the Dietary Guidelines for Americans 2020-2025</p>
            </div>
        </div>

        {/* <h2 className='nutrheading'>Let's Learn about different types of Nutrients</h2> */}
        <h2 className='protheading'>Protein 101</h2>
        <div className='nutrientsdiv'>

          <div className='protdiv'>

            <img className='protimg' src='./breakfast-club/img/protein-guide.png' alt='protein guide'></img>

            <div className='prottextcontainer'>
              <div className='protdescr'>
                <b>Two Types of Protein: Complete protein</b>
                  <p>There are 9 essential amino acids the body can’t produce. We get these from complete proteins.
                  <i>Meat, fish, eggs, dairy and soy</i></p>
                  <img className='compimg' src='./breakfast-club/img/compprot.png' alt='Examples of complete proteins'></img>
                  <br></br>
                  <b>Incomplete protein</b>
                  <p>Eating different incomplete protein during the day gives you the benefits of complete protein.
                  <i>Beans, nuts, and most whole grains</i></p>
                <img className='incompimg' src='./breakfast-club/img/incompproteins.png' alt='Examples of incomplete proteins'></img>
                {/* </p> */}
              </div>
              </div>
              </div>


          <h2 className='carbsheading'>Carbs 101</h2>
          <div className='carbsdiv'>

            <div>
              <div className='whycarbsdiv'>
                <img className='whycarbsimg' src='./breakfast-club/img/whycarbs.png' alt='why carbs?'></img>
              </div>


              <div className='carbstextcontainer'>
                <p>
                  <b>Three Types of Carbs:
                  Fiber</b>
                  <ul>
                  <li>Complex Carbs</li>
                  <li>Cannot be digested</li>
                  </ul>
                  <b>Starches</b>
                  <ul>
                  <li>Complex Carbs</li>
                  <li>Break down into sugar and used for energy</li>
                  </ul>
                  <b>Sugars</b>
                  <ul>
                  <li>Simple carbs</li>
                  <li>Body uses quickly or stores</li>
                  </ul>
                </p>
              </div>

            </div>

            <div>
              <img className='carbsimg' src='./breakfast-club/img/carbs-guide.jpg' alt='carbs infographic'></img>
            </div>


          </div>

          <h2 className='fatsheading'>Fats 101</h2>

          <div className='fatsdiv'>
            <div className='fattextcontainer'>
              <div className='fatdescr'>
                <b>Healthy vs unhealthy fats</b><br></br>
                <b>Healthy fats</b>
                <p>Salmon, Tuna, olives, olive oil, avocados, nuts and seeds</p>
                <img className='heathfats' src='./breakfast-club/img/healthyfats.png' alt='Examples of Healthy fats'></img>

                <br></br>
                <b>Unhealthy saturated fats</b>
                <p>red meat, dairy products (cheese, butter, ice cream)</p>
                <img className='satfats' src='./breakfast-club/img/unheatfats.png' alt='Examples of Unheathly saturated fats'></img>

                <br></br>
                <b>Trans fats</b>
                <p>Fried and Fast food and processed foods (crackers, chips, and cookies)</p>
                <img className='transfats' src='./breakfast-club/img/transfat.png' alt='Examples of Trans fats'></img>
              </div>
            </div>

            <div>
              <img className='fatblurb' src='./breakfast-club/img/fatblurb.png'></img>
            </div>

          </div>

          <div className='fatsindietdiv'>
              <img className='fatsindiet' src='./breakfast-club/img/fatsdiet.png'></img>
          </div>

        </div>
      </section>
    );
}