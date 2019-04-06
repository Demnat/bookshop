import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'
import SortOptions from './SortOptions';
import BooksList from './BooksList';
import PaginationContainer from './PaginationContainer';
import * as homeActions from './Home.actions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        this.props.getBooks(queryParams.sortBy, queryParams.sortDirection, queryParams.currentPage !== undefined ? parseInt(queryParams.currentPage)-1:undefined);
    }

    sort = (sortBy, sortDirection) => {
        this.props.getBooks(sortBy, sortDirection);
    }

    

    render() {
        return (
            <section className="container homeSection" id="homeSection">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                        <div className="leftNavBar">
                            <SortOptions sort={this.sort} />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <BooksList books = {this.props.books}/>
                        <PaginationContainer  
                            currentPage = {this.props.currentPage}
                            pages = {this.props.pages}
                            sortData = {this.props.sortData}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        books: store.HomeReducer.books,
        currentPage: store.HomeReducer.currentPage,
        pages: store.HomeReducer.pages,
        sortData: store.HomeReducer.sortData
    };
};

const mapDispatchToProps = {
    ...homeActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);