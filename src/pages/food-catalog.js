import React, { useState } from 'react';
import { Link } from "react-router-dom";

<div className="translate">
  <p>
  <Link to="/breakfast-club" className=""><strong>English</strong></Link> |&nbsp;
  <Link to="/breakfast-club-vn" className=""><strong>Tiếng Việt</strong></Link>
  </p>
</div>

function FoodCard(props) {
    return (
        <div className="card">
              <div className="card-body">
                <h3 className="card-title">{props.foods.name}</h3>
              </div>
              <img className="card-img-bot" src={props.foods.img} alt={props.foods.name} />
        </div>
    )
  }

function FoodCatalog(props) {
  const [filters, setFilters] = useState({
    carb: false,
    protein: false,
    fat: false,
    df: false,
    gf: false,
    vegan: false,
    vegetarian: false,
    produce: false,
    grains: false,
    dairy: false,
    meat: false,
    canned: false
  });

  const handleFilterChange = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter]
    }));
  };

  const filteredFoods = props.foods.filter((food) => {
    return (
      (!filters.carb || food.carb === "true") &&
      (!filters.protein || food.protein === "true") &&
      (!filters.fat || food.fat === "true") &&
      (!filters.df || food.df === "true") &&
      (!filters.gf || food.gf === "true") &&
      (!filters.vegan || food.vegan === "true") &&
      (!filters.vegetarian || food.vegetarian === "true") &&
      (!filters.produce || food.produce === "true") &&
      (!filters.grains || food.grains === "true") &&
      (!filters.dairy || food.dairy === "true") &&
      (!filters.meat || food.meat === "true") &&
      (!filters.canned || food.canned === "true") 
    );
  });

  return (
    <div className="catalog">
      <div className="translate">
        <p>
        <Link to="/catalog" className=""><strong>English</strong></Link> |&nbsp;
        <Link to="/catalog-vn" className=""><strong>Tiếng Việt</strong></Link>
        </p>
      </div>
      <h2>Food Catalog</h2>
      <h3 id="catalogDesc">Use the filter to navigate through the foods catered to your nutritional needs!</h3>
      <section className='catalog-content'>
        <section id="filter-box">
            <h4>Macronutrient Source:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.carb}
                onChange={() => handleFilterChange("carb")}
            />
            Carb
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.protein}
                onChange={() => handleFilterChange("protein")}
            />
            Protein
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.fat}
                onChange={() => handleFilterChange("fat")}
            />
            Fat
            </label>
            <h4>Dietary Preference:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.df}
                onChange={() => handleFilterChange("df")}
            />
            Dairy-free
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.gf}
                onChange={() => handleFilterChange("gf")}
            />
            Gluten-free
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.vegan}
                onChange={() => handleFilterChange("vegan")}
            />
            Vegan
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.vegetarian}
                onChange={() => handleFilterChange("vegetarian")}
            />
            Vegetarian
            </label>
            <h4>Food Category:</h4>
            <label>
            <input
                type="checkbox"
                checked={filters.produce}
                onChange={() => handleFilterChange("produce")}
            />
            Produce
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.grains}
                onChange={() => handleFilterChange("grains")}
            />
            Grains
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.dairy}
                onChange={() => handleFilterChange("dairy")}
            />
            Dairy & Eggs
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.meat}
                onChange={() => handleFilterChange("meat")}
            />
            Meat
            </label>
            <label>
            <input
                type="checkbox"
                checked={filters.canned}
                onChange={() => handleFilterChange("canned")}
            />
            Canned
            </label>
        </section>
        <section className="card-deck">
          {filteredFoods.length > 0 ? (
              filteredFoods.map((arrayItem) => (
                <FoodCard foods={arrayItem} key={arrayItem.name} />
              ))
            ) : (
              <p id="noResults">No results found.</p>
            )}
        </section>
    </section>
    </div>
  );
}

export default FoodCatalog;
