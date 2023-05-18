import React from 'react';
import meals from '../data/meals.json'

export default function Meals(props) {
  
    return (
        <div className="mealsPage">
            <h1>Meals</h1>

            <div className="paragraphDiv">
                 <p>Scroll through this list for recommended nutritious meals. To see their ingredients and nutritional value, click “See Details.”</p>
            </div>

            <div className="meal-container">

            </div>
        </div>
    );
}