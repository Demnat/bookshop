import React from 'react';
// import { Link } from 'react-router-dom';

const SortOptions = () => (

    <div className="sortOptionsContainer">
        <h6 className="leftNavBarHeader">Sortuj:</h6>
        <ul className="leftNavBarMenu">
            <li className="leftNavBarMenu-item">
                <a href="#homeSection" className="leftNavBarOptions leftNavBarMenu-item-link">Cena rosnąco</a>
            </li>
            <li className="leftNavBarMenu-item">
                <a href="#homeSection" className="leftNavBarOptions leftNavBarMenu-item-link">Cena malejąco</a>
            </li>
            <li className="leftNavBarMenu-item">
                <a href="#homeSection" className="leftNavBarOptions leftNavBarMenu-item-link active">Tytuł A-Z</a>
            </li>
            <li className="leftNavBarMenu-item">
                <a href="#homeSection" className="leftNavBarOptions leftNavBarMenu-item-link">Tytuł Z-A</a>
            </li>
        </ul>
    </div>

);

export default SortOptions;