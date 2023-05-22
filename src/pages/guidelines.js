import React from 'react';
export default function Guidelines(props) {

  return (
      <section id='guidelines'>
        <h1>Dietary Guidelines</h1>
        <h2 id="videoheading">Here is a video giving an overview of best nutrtion and health practices as laid out by the USDA and USHHS</h2>
        <div className='videodiv'>
          <iframe src="https://www.youtube.com/embed/IR0PaeUNp4M"></iframe>
        </div>
        <div className='dgadiv'>
            <img className='dgaimg' src='./breakfast-club/img/dgaguidelines.jpg' alt='dga guidelines'></img>
            <div className='dgatextcontainer'>
              <p className='dgadescr'>This is an infographic taken from the Dietary Guidelines for Americans 2020-2025</p>
            </div>
        </div>

        <h2 className='nutrheading'>Let's Learn about different types of Nutrients</h2>
        <div className='nutrientsdiv'>


          <div className='proteindiv'>
            <h3 className='protheading'>Protein 101</h3>

            <img className='protimg' src='./breakfast-club/img/protein-guide.png' alt='protein guide'></img>

            <div className='prottextcontainer'>
              <p className='protdescr'>
                <b>Two Types of Protein: Complete protein</b>
                  <p>There are 9 essential amino acids the body can’t produce. We get these from complete proteins.
                  <i>Meat, fish, eggs, dairy and soy</i></p>
              {/* <img className='compimg' src='./breakfast-club/img/compprot.png' alt='Examples of complete proteins'></img> */}
                  {/* <b>Incomplete protein</b>
                  <p>Eating different incomplete protein during the day gives you the benefits of complete protein.
                  <i>Beans, nuts, and most whole grains</i></p>
              <img className='incompimg' src='./breakfast-club/img/incompproteins.png' alt='Examples of incomplete proteins'></img> */}
              </p>

            </div>

            <div className='carbsdiv'>
              <h3 className='carbsheading'>Carbs 101</h3>
              <div>
                <img className='' src='' alt='why carbs?'></img>
              </div>
              <div>
                <img className='carbsimg' src='./breakfast-club/img/carbs-guide.jpg' alt='carbs infographic'></img>
              </div>

              <div className='carbstextcontainer'>
                <p>
                  <b>Three Types of Carbs:
                  Fiber</b>
                  <ul>
                  <li>Complex Carbs</li>
                  <li>Cannot be digested</li>
                  </ul>

                  <b>
                  Starches</b>
                  <ul>
                  <li>Complex Carbs</li>
                  <li>Break down into sugar and used for energy</li>
                  </ul>

                  <b>
                  Sugars</b>
                  <ul>
                  <li>Simple carbs</li>
                  <li>Body uses quickly or stores</li>
                  </ul>
                </p>

              </div>

              <div className='fatsdiv'>
                <h3>Fats 101</h3>

                <div className='fattextcontainer'>
                  <b>Healthy vs unhealthy fats</b>
                  <div className='fatdescr'>
                    <b>Healthy fats</b>
                    <p>Salmon, Tuna, olives, olive oil, avocados, nuts and seeds</p>
                    <img src='./breakfast-club/img/healthyfats.png' alt='Examples of Healthy fats'></img>
                  </div>

                  <div className='fatdescr'>
                    <b>Unhealthy saturated fats</b>
                    <p>red meat, dairy products (cheese, butter, ice cream)</p>
                    <img src='./breakfast-club/img/unheatfats.png' alt='Examples of Unheathly saturated fats'></img>
                  </div>

                  <div className='fatdescr'>
                    <b>Trans fats</b>
                    <p>Fried and Fast food and processed foods (crackers, chips, and cookies)</p>

                    <img src='./breakfast-club/img/transfat.png' alt='Examples of Trans fats'></img>
                  </div>

                  </div>

              </div>

            </div>

          </div>

        </div>
      </section>
    );
}