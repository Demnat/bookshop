import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (

    <footer className="container footer">
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8">
                <p className="rights">All rights reserved - Demnat</p>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <ul className="footerMenu">
                    <li className="footerMenu-item">
                        <NavLink to="/" className="footerMenuLink footerMenu-item-link">Home</NavLink>
                    </li>
                    <li className="footerMenu-item">
                        <NavLink to="/faq" className="footerMenuLink footerMenu-item-link">FAQ</NavLink>
                    </li>
                    <li className="footerMenu-item">
                        <NavLink to="/rules" className="footerMenuLink footerMenu-item-link">Regulamin</NavLink>
                    </li>
                    <li className="footerMenu-item">
                        <NavLink to="/contact" className="footerMenuLink footerMenu-item-link">Kontakt</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </footer>

);

export default Footer;