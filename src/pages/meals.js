import React, { useState } from 'react';
import meals from '../data/meals.json'

export default function Meals(props) {
    const [popup, setPopup] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);

    function togglePopup(mealInfo) {
        setPopup(!popup);
        setSelectedMeal(mealInfo);
        console.log(mealInfo)
    }

    function MealCard(props) {
        return(
            <div className="meal-card">
                <p className="meal-title">{props.info.name}</p>
                <img src={props.info.img} alt={props.info.name}></img>
                <div className="button-div">
                    <button onClick={() => togglePopup(props.info)}>
                    <span className="button-text">See Details</span>
                    </button>
                </div>
            </div>
        );
    }

    let mealCards = meals.map((currentMeal) => {
        return (<MealCard info={currentMeal} key={currentMeal.name}/>);
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

            {popup &&
             <div className="overlay">
                <div className="popup">
                    <div className="popupContent">
                        <h2>{selectedMeal.name}</h2>
                        <div className="popup-container">
                            <div className="popup-left"> 
                                <div className="popup-card">
                                    <img src={selectedMeal.img} alt={selectedMeal.name}></img>
                                    <p>{selectedMeal.description}</p>
                                </div>
                                <p><strong>Ingredients: </strong>{selectedMeal.ingredients}</p>
                            </div>
                        
                            <div className="label">
                                <img src={selectedMeal.info} alt={selectedMeal.name}/>
                            </div>
                        </div>
                     <button className="close-button" onClick={() => togglePopup(null)}>Close</button>
                 </div>
                </div>
            </div>
            
            
            }

        </div>
    );
}