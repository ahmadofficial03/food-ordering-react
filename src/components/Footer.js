import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h3 className="logo">Homely</h3>
        <p className="footer-info">
          Solution for easy and flexible getting meals for the household.You can
          trust us anywhere through this platform
        </p>
        <p className="copyright">©2022 Made with by EniolaCodes</p>
      </div>
      <div className="medium">
        <h3 className="footer-heading">About</h3>
        <p className="about-item">Our Company</p>
        <p className="about-item">Career</p>
        <p className="about-item">Investors Relations</p>
        <p className="about-item">Social Impact</p>
      </div>
      <div className="right">
        <h3 className="footer-heading">Social</h3>
        <BsFacebook className="about-item icons" />
        <FaTwitter className="about-item icons" />
        <AiFillInstagram className="about-item icons" />
      </div>
    </div>
  );
}

export default Footer;
