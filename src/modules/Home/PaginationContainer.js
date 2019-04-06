import React, { Component } from 'react';
import PaginationItem from './PaginationItem';

class PaginationContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        let items = [];
        
        for(let i =0; i < this.props.pages; ++i)
        {
            items.push(<PaginationItem 
                key={i}
                currentPage = {i + 1}
                pages = {this.props.pages}
                sortData = {this.props.sortData} />);
        }
        return items;
    }

    render() {
        return (
            <nav className="paginationContainer">
                <ul className="pagination">
                    {this.renderItems()}
                </ul>
            </nav>
        )
    }
}

export default PaginationContainer;