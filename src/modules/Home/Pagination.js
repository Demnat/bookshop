import React from 'react';

const Pagination = (props) => (

    <nav className="paginationContainer">
        <ul className="pagination">
            <li className="pagination-pageItem">
                <a class="pageLink" href="#">
                    <i class="fas fa-arrow-left"></i>
                </a>
            </li>
            <li className="pagination-pageItem">
                <a class="pageLink active" href="#">01</a>
            </li>
            <li className="pagination-pageItem">
                <a className="pageLink" href="#">02</a>
            </li>
            <li className="pagination-pageItem">
                <a class="pageLink" href="#">03</a>
            </li>
            <li className="pagination-pageItem">
                <a class="pageLink" href="#">
                    <i class="fas fa-arrow-right"></i>
                </a>
            </li>
        </ul>
    </nav>

)

export default Pagination;