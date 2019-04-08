import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginationItem = ( props ) => (

    <React.Fragment>
        {(() => {
            let path = [];
            if (props.sortData !== null) {
                path.push(`${props.sortData.sortBy}`);
                path.push(`${props.sortData.sortDirection}`);
            }
            path.push(props.currentPage);
            let rend;
            if (props.firstArrow !== undefined) {
                rend = () => <i className="fas fa-arrow-left"></i>;
            }
            else if (props.lastArrow !== undefined) {
                rend = () => <i className="fas fa-arrow-right"></i>;
            }
            else {
                rend = () => props.currentPage;
            }
            return (
                <NavLink 
                    to={{
                        pathname: `/` + path.join("/"),
                        }}
                    className="pageLink"
                    activeClassName="active">
                        {rend()}
                </NavLink>
            )    
        })()}
    </React.Fragment>
)

export default PaginationItem;