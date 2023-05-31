import React from 'react';
import { Link } from "react-router-dom";

export default function Guidelines(props) {

  return (
      <section>
        <div className="translate">
          <p>
            <Link to="/guidelines" className=""><strong>English</strong></Link> |&nbsp;
            <Link to="/guidelines-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
        </div>
        <h1>Dietary Guidelines</h1>
        <h2 id="videoDesc">Here is a video going over the best dietary and nutrtion practices as outlined by the US Department of Agriculture and Health and Human Services.</h2>
          <div className="guidelineVideo">
            <iframe src="https://www.youtube.com/embed/IR0PaeUNp4M" title="Youtbe Video: Understanding the Dietary Guidelines for Americans"></iframe>
          </div>
        <section className='dgadiv'>
            <img className='dgaimg' src='./breakfast-club/img/dgaguidelines.jpg' alt="Make every bite count with the Dietary Guidelines for Americans. Here's how: Limit foods and beverages higher in added sugars, saturated fat, and sodium, and limit alcoholic beverages. Follow a healthy dietary pattern at every life stage. Customize and enjoy nutrient- dense food and beverage choices to reflect personal preferences, cultural traditions, and budgetary considerations. Focus on meeting food group needs with nutrient-dense foods and beverages, and stay within calorie limits."></img>
            <div className='dgatextcontainer'>
              <p className='dgadescr'>This is an infographic taken from the Dietary Guidelines for Americans 2020-2025</p>
            </div>
        </section>

        <h2 className='nutrheading'>Let's Learn about different types of Nutrients</h2>
        <h3 className='protheading'>Protein 101</h3>
        <div className='nutrientsdiv'>

          <section className='protdiv'>

            <img className='protimg' src='./breakfast-club/img/protein-guide.png' alt='How many grams of protein should I have each day? JUU Divide your weight by 2.2, then, multiply by 0.8. = grams per day For example: 150 lbs ÷ 2.2 = 68.2 68.2 x 0.8= 54.5 grams of protein each day Eat protein with all 3 meals to get energy throughout the day.'></img>

            <div className='prottextcontainer'>
              <div className='protdescr'>
                <b>Two Types of Protein: Complete protein</b>
                  <p>There are 9 essential amino acids the body can’t produce. We get these from complete proteins.
                  <i> Meat, fish, eggs, dairy and soy</i></p>
                  <img className='compimg' src='./breakfast-club/img/compprot.png' alt='Examples of complete proteins'></img>
                  <br></br>
                  <b>Incomplete protein</b>
                  <p>Eating different incomplete protein during the day gives you the benefits of complete protein.
                  <i> Beans, nuts, and most whole grains</i></p>
                <img className='incompimg' src='./breakfast-club/img/incompproteins.png' alt='Examples of incomplete proteins'></img>
                {/* </p> */}
              </div>
            </div>
          </section>
          <h3 className='carbsheading'>Carbs 101</h3>
          <section className='carbsdiv'>
            <div id="leftCarbs">
            <h4>Why Carbs?</h4>
              <div className='whycarbsdiv'>
                <img className='whycarbsimg' src='./breakfast-club/img/whycarbs.jpg' alt='Digestion, Fuel, Disease prevention, weight managment'></img>
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
              <img className='carbsimg' src='./breakfast-club/img/carbs-guide.jpg' alt="HOW does your body use carbs? THE UNIVERSITY OF TEXAS MD Anderson Cancer Center Making Cancer HistoryⓇ Carb digestion starts as you chew. Acid in stomach stops the digestion started in the mouth. In the intestines, carbs are turned into glucose or simple sugars to fuel cells. Fiber can't be fully digested, so it slows the absorption of starches and simple sugars. The broken down carbs are absorbed into your bloodstream and sent to muscles, organs and tissues. This keeps cells healthy and gives you energy. Excess carbs are stored in the liver as glycogen, an energy source, and in the body as fat. Choose healthy carbs: peas nuts carrots sweet potatoes low- fat dairy refined sugars squash oatmeal apples refined grains bananas Avoid unhealthy carbs: beans. pastries & candy grapes pears sweetened drinks"></img>
          </section>

          <h3 className='fatsheading'>Fats 101</h3>

          <section className='fatsdiv'>
            <div className='fattextcontainer'>
              <div className='fatdescr'>
              <b id="fatTitle">Healthy vs unhealthy fats</b><br></br>
              <b>Healthy fats</b>
                <div id="healthFat">
                  <p>Salmon, Tuna, olives, olive oil, avocados, nuts and seeds</p>
                  <img className='heathfats' src='./breakfast-club/img/healthyfats.png' alt='Examples of Healthy fats'></img>
                </div>
                <b>Unhealthy saturated fats</b>
                <div id="unhealthyFat">
                  <p>red meat, dairy products (cheese, butter, ice cream)</p>
                  <img className='satfats' src='./breakfast-club/img/unheatfats.png' alt='Examples of Unheathly saturated fats'></img>
                  </div>
                  <b>Trans fats</b>
                <div id="transFat">
                  <p>Fried and Fast food and processed foods (crackers, chips, and cookies)</p>
                  <img className='transfats' src='./breakfast-club/img/transfat.png' alt='Examples of Trans fats'></img>
                </div>
              </div>
            </div>

            <div className="fatFunction">
              <b id="badRap">Fat Gets a Bad Rap</b><br></br>
              <p>Fat should make up 20-35% of your daily calories</p><br></br>
              <p>“Dietary fats give you energy, support cell function and help your body absorb nutrients from vegetables, fruits and other foods” -Erma Levy (research dietitian)</p>
            </div>
          </section>

          <div className='fatsindietdiv'>
              <img className='fatsindiet' src='./breakfast-club/img/fatsdiet.png' alt="Try cooking with canola or olive oil instead of butter, margarine or shortening Ways to make healthy fats a part of your diet Add nuts or seed to a fruit smoothie. Or spread peanut butter on whole grain bread or apples Eat your salad with an olive-oil based dressing. Avoid creamy dressings Eat fish like salmon, tuna or herring a couple time a week as an alternative to red meat"></img>
          </div>

        </div>
      </section>
    );
}