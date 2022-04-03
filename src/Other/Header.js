import React from 'react'
import {Link} from "react-router-dom";
import './Header.css';


const Header = ({cartItems}) => {
  return (
    <div>
        <header className='header'>
            <div>
                <h1>
                    <Link to ='/' className='logo'>
                        Electronic SHOP
                    </Link>
                </h1>
            </div>
        <div className="header-links">
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/">SIGNUP</Link>
                </li>
                <li>
                    <Link to ="/">Cart</Link>
                </li>
            </ul>
            <li>
                <Link to="/cart" className='cart'>
                    <i className='fas fa-shopping-cart'></i>
                    <span className='cart-length'>
                             {cartItems.length === 0 ? "" :cartItems.length} 

                    </span>
                </Link>
            </li>
        </div>

        </header>


    </div>
  )
}

export default Header