import React from 'react';
import { NavLink } from 'react-router-dom';

const PaginationItem = ( props ) => (

    <React.Fragment>
        {(() => {
            let path = [];
            if (props.sortData !== null)
            {
                path.push(`${props.sortData.sortBy}`);
                path.push(`${props.sortData.sortDirection}`);
            }
            
            // if (props.currentPage !== 1) {
            //     search.push("currentPage=1");
            //     return (
            //         <NavLink to={{
            //             pathname: "/",
            //             search: "?" + search.join("&")
            //         }}
            //             className="pageLink"
            //             activeClassName="active">
            //                 <i class="fas fa-arrow-left"></i>
            //         </NavLink>
            //     )
            // }
            // if (props.currentPage !== props.pages) {
            //     search.push("currentPage=" + props.pages);
            //     return (
            //         <NavLink 
            //             to={{
            //                 pathname: "/",
            //                 search: "?" + search.join("&")
            //             }}
            //             className="pageLink"
            //             activeClassName="active">
            //                 <i class="fas fa-arrow-right"></i>
            //         </NavLink>
            //     )
            // } 
            
            path.push(`${props.currentPage}`);
            return (
                <NavLink 
                    to={{
                        pathname: `/` + path.join("/"),
                        // search: "?" + search.join("&")
                    }}
                    className="pageLink"
                    activeClassName="active">
                        {props.currentPage}
                </NavLink>
            )
            
        })()}
    </React.Fragment>
)

export default PaginationItem;