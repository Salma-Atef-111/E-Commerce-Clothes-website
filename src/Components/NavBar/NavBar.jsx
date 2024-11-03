import { Link } from "react-router-dom";
import Image5 from "../../Img/Image5.png";
import Search from '../../Img/Search.png';
import User from '../../Img/User.png';
import Cart from '../../Img/Cart.png';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CartOffCanvas from "../Home/CartOffCanvas"; 
import { useCart } from "../Home/CartContext"; 
import "../Css/NavBar.css"

export default function NavBar() {
    const [categories, setCategories] = useState([]); 
    const [isOpen, setIsOpen] = useState(false); 
    const { cartItems } = useCart(); 

   
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products/categories");
                setCategories(response.data); 
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories(); 
    }, []); 

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className="navbar-brand" src={Image5} alt="Logo" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse show" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {categories.map((category, index) => (
                            <Link key={index} className="nav-link" to="/#">{category}</Link>
                        ))}
                    </div>
                    <img className="searchBtn" src={Search} alt="Search" />
                    <p className="Login"><img src={User} alt="User Log in" />Log In </p> 
                    <div className="icon-container" onClick={handleToggle}>
                        <img id="icon" src={Cart} alt="Cart"  style={{ cursor: 'pointer' }} />
                        <div className="notification-badge rounded-circle d-flex justify-content-center align-items-center">
                            {cartItems.length} 
                        </div>
                    </div>
                </div>
            </div>
            <CartOffCanvas isOpen={isOpen} onClose={handleToggle} /> 
        </nav>
    );
}
