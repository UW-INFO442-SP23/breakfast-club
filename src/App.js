import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import FoodCard from './components/food-card.js';
import Home from './pages/home.js';
import AboutUs from './pages/about-us.js';
import FoodCatalog from './pages/food-catalog.js';
import Meals from './pages/meals.js';
import Guidelines from './pages/guidelines.js';
import NotFound from './pages/not-found.js';
import foods from './data/foods.json'

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/About" element={<AboutUs />} />
                    <Route path="/Catalog" element={<FoodCatalog foods = {foods}/>} />
                    <Route path="/Meals" element={<Meals/>} />
                    <Route path="/Guidelines" element={<Guidelines />} />
                    <Route path="/404" element={<NotFound/>} />
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
  }  