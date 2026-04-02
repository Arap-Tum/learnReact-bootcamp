import "../css/header.css";
import logo from "../assets/logo.png";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        {/* LEFT - LOGO */}
        <div className="logo">
          <img src={logo} alt="SmartShop Logo" />
          <h1>SmartShop</h1>
        </div>

        {/* CENTER - NAV (DESKTOP) */}
        <nav className="nav">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* RIGHT - ACTIONS */}
        <div className="header-actions">

          {/* CART */}
          <button className="cart-btn">
            <ShoppingCart color="white" size={20} />
            <span className="cart-count">0</span>
          </button>

          {/* HAMBURGER */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X color="white" size={22} />
            ) : (
              <Menu color="white" size={22} />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;