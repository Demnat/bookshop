import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (

    <header className="container header" >
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <Link to="/" className="logoLink">Bookshop</Link>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <nav className="header-menuContainer">
                    <ul className="mainMenu">
                        <li className="mainMenu-item">
                            <NavLink exact to="/" className="mainMenuLink mainMenu-item-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="mainMenu-item">
                            <NavLink to="/faq" className="mainMenuLink mainMenu-item-link" activeClassName="active">FAQ</NavLink>
                        </li>
                        <li className="mainMenu-item">
                            <NavLink to="/rules" className="mainMenuLink mainMenu-item-link" activeClassName="active">Regulamin</NavLink>
                        </li>
                        <li className="mainMenu-item">
                            <NavLink to="/contact" className="mainMenuLink mainMenu-item-link" activeClassName="active">Kontakt</NavLink>
                        </li>
                        <li className="mainMenu-item">
                            <NavLink to="/cart" className="mainMenuLink mainMenu-item-link" activeClassName="active">
                                <i className="fas fa-shopping-basket basketIcon"></i>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

);

export default Header;