import React, { useState } from "react";
import "../css/NavBar.css";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();
  const navigateTo = (id) => {
    // Use React Router to navigate
    navigate(`#${id}`);

    // Optionally scroll to the section (this is often handled by the browser by default)
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav className="navbar">
        {/* Hamburger menu (only visible on small screens) */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        {/* Links, show mobile-menu class when menu is open */}
        <ul className={`navbar-links ${isMenuOpen ? "mobile-menu" : ""}`}>
          <li onClick={() => navigateTo("about")}>
            <Link to="#about">About</Link>
          </li>{" "}
          {/* Use Link for hash-based navigation */}
          <li>
            <Link to="#experience">Experience</Link>
          </li>
          <li>
            <Link to="#skills">Skills</Link>
          </li>
          <li>
            <Link to="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
