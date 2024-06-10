import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Welcome to your one-stop shop for cinematic adventures! Dive into a
                    universe of movies and TV shows, from the latest blockbusters to
                    timeless classics. Explore curated collections by genre, mood, or
                    director, or lose yourself in personalized recommendations based on
                    your viewing habits. Discover thousands of movies and TV shows. <br/>
                    Browse curated collections, get personalized recommendations.
                    Happy watching!
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <br/><br/>
                <div className="copyright">
                    Copyright © {currentYear} Abhify. All rights reserved.
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
