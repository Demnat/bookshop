import React from 'react';
import { SORT_PRICE, SORT_TITLE, SORT_ASC, SORT_DESC } from '../../data/variables.js';


const SortOptions = (props) => (

    <div className="sortOptionsContainer">
        <h6 className="leftNavBarHeader">Sortuj:</h6>
        <ul className="leftNavBarMenu">
            <li className="leftNavBarMenu-item">
            {/* do  poprawki style z a na button */}
                <button className="leftNavBarOptions leftNavBarMenu-item-link" onClick={() => props.sort(SORT_PRICE, SORT_ASC)} >Cena rosnąco</button>
            </li>
            <li className="leftNavBarMenu-item">
                <button className="leftNavBarOptions leftNavBarMenu-item-link" onClick={() => props.sort(SORT_PRICE, SORT_DESC)} >Cena malejąco</button>
            </li>
            <li className="leftNavBarMenu-item">
                <button className="leftNavBarOptions leftNavBarMenu-item-link" onClick={() => props.sort(SORT_TITLE, SORT_ASC)} >Tytuł A-Z</button>
            </li>
            <li className="leftNavBarMenu-item">
                <button className="leftNavBarOptions leftNavBarMenu-item-link" onClick={() => props.sort(SORT_TITLE, SORT_DESC)} >Tytuł Z-A</button>
            </li>
        </ul>
    </div>

);

export default SortOptions;