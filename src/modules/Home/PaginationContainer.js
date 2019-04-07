import React, { Component } from 'react';
import PaginationItem from './PaginationItem';

class PaginationContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        let items = [];
        if (this.props.currentPage > 0){
            items.push(<PaginationItem 
                key={-1}
                currentPage = {1}
                pages = {this.props.pages}
                firstArrow = {true}
                sortData = {this.props.sortData} />);
        }
        for(let i = 0; i < this.props.pages; ++i)
        {
            items.push(<PaginationItem 
                key={i}
                currentPage = {i + 1}
                pages = {this.props.pages}
                sortData = {this.props.sortData} />);
        }
        if (this.props.pages - 1 > this.props.currentPage){
            items.push(<PaginationItem 
                key={this.props.pages + 1}
                currentPage = {this.props.pages}
                pages = {this.props.pages}
                lastArrow = {true}
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