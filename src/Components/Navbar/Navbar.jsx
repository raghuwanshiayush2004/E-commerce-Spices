import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logoG.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>Grade N Grind</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => setMenu("spices")}><Link style={{textDecoration:'none'}} to='/spices'>Spices</Link>{menu === "spices" ? <hr /> : null}</li>
        <li onClick={() => setMenu("salt_variants")}><Link style={{textDecoration:'none'}} to='/salt_variants'>Salt Variants</Link>{menu === "salt_variants" ? <hr /> : null}</li>
        <li onClick={() => setMenu("spice_powders")}><Link style={{textDecoration:'none'}} to='/spice_powders'>Spice Powders</Link>{menu === "spice_powders" ? <hr /> : null}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt='' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
