import React, { useState } from 'react';
import meals from '../data/meals.json'

export default function Meals(props) {
    const [popup, setPopup] = useState(false);

    function MealCard(props) {
        return(
            <div className="meal-card">
                <p className="meal-title">{props.info.name}</p>
                <img src={props.info.img} alt={props.info.name}></img>
                <div className="button-div">
                    <button onClick={()=> setPopup(true)}>
                    <span className="button-text">See Details</span>
                    </button>
                </div>
                
            </div>
        );
    }

    function Popup(props) {
        return(
            <div className="overlay">
                <div className="popup">
                    <h2>Nutritional Information</h2>
                </div>
            </div>
        );
    }

    let mealCards = meals.map((currentMeal) => {
        return (<MealCard info={currentMeal} key={currentMeal.name}/>);
    });
  
    return (
        <div className="meals-page">
            <Popup></Popup>
            <h1>Meals</h1>
            <div className="paragraphDiv">
                 <p>Scroll through this list for recommended nutritious meals. To see their ingredients and nutritional value, click “See Details.”</p>
            </div>
            <div className="meal-container">
                {mealCards}
            </div>
            {popup && <Popup/>}
        </div>
    );
}