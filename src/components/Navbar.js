import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="header">
      <h3 className="logo">Homely</h3>
      <ul className={`menu ${mobileMenu ? "hidden" : "visible"}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#why-choose-us">Why choose us?</a>
        </li>
        <li>
          <a href="#our-dishes">Our dishes</a>
        </li>
        <li>
          <a href="#about-us">About us</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      {/* MOBILE MENU */}

      <div className="nav-toggler">
        {mobileMenu ? (
          <RxCross1
            className="nav-icons"
            onClick={() => setMobileMenu((prev) => !prev)}
          />
        ) : (
          <GiHamburgerMenu
            className="nav-icons"
            onClick={() => setMobileMenu((prev) => !prev)}
          />
        )}
      </div>
      <ul className={`mobile-menu ${mobileMenu ? "visible" : "hidden"}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#why-choose-us">Why choose us?</a>
        </li>
        <li>
          <a href="#our-dishes">Our dishes</a>
        </li>
        <li>
          <a href="#about-us">About us</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
