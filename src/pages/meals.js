import React from 'react';
import meals from '../data/meals.json'

export default function Meals(props) {
    function MealCard(props) {
        return(
            <div className="meal-card">
                <p className="meal-title">{props.info.name}</p>
                <img src={props.info.img} alt={props.info.name}></img>
                <p>See Details</p>
            </div>
        );
    }

    let mealCards = meals.map((currentMeal) => {
        return (<MealCard info={currentMeal}/>);
    });
  
    return (
        <div className="meals-page">
            <h1>Meals</h1>
            <div className="paragraphDiv">
                 <p>Scroll through this list for recommended nutritious meals. To see their ingredients and nutritional value, click “See Details.”</p>
            </div>
            <div className="meal-container">
                {mealCards}
            </div>
        </div>
    );
}