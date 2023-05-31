import Navbar from './components/navbar.js';
import Footer from './components/footer.js';
import FoodCard from './components/food-card.js';
import FoodCardVN from './components/food-card-vn.js';
import Home from './pages/home.js';
import AboutUs from './pages/about-us.js';
import FoodCatalog from './pages/food-catalog.js';
import Meals from './pages/meals.js';
import Guidelines from './pages/guidelines.js';
import NotFound from './pages/not-found.js';
import foods from './data/foods.json'

/* vietnamese pages */
import HomeVN from './pages-vn/home-vn.js';
import AboutUsVN from './pages-vn/about-us-vn.js';
import FoodCatalogVN from './pages-vn/food-catalog-vn.js';
import foodsvn from './data/foodsvn.json'
import MealsVN from './pages-vn/meals-vn.js';
import GuidelinesVN from './pages-vn/guidelines-vn.js';
import NotFoundVN from './pages-vn/not-found-vn.js';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

export default function App(props) {
    return (
        <div>
            <Router>
                <header>
                    <Navbar/>
                </header>
                <Routes>
                        <Route path="/breakfast-club" element={<Home/>} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/catalog" element={<FoodCatalog foods = {foods}/>} />
                        <Route path="/meals" element={<Meals/>} />
                        <Route path="/guidelines" element={<Guidelines />} />
                        <Route path="/404" element={<NotFound/>} />
                        <Route path="/breakfast-club-vn" element={<HomeVN/>} />
                        <Route path="/about-vn" element={<AboutUsVN />} />
                        <Route path="/catalog-vn" element={<FoodCatalogVN foodsvn = {foodsvn}/>} />
                        <Route path="/meals-vn" element={<MealsVN/>} />
                        <Route path="/guidelines-vn" element={<GuidelinesVN />} />
                        <Route path="/404-vn" element={<NotFoundVN/>} />
                </Routes>
                <footer>
                    <Footer/>
                </footer>
            </Router>
        </div>
    );
  }  