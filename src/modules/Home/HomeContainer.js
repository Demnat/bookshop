import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortOptions from './SortOptions';
import BooksList from './BooksList';
import PaginationContainer from './PaginationContainer';
import * as homeActions from './Home.actions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const matchParams = this.props.match.params;
        console.log('homecontainer - matchParams - componentWillMount', matchParams);
        this.props.getBooks(matchParams.sortBy, matchParams.sortDirection, matchParams.currentPage !== undefined ? parseInt(matchParams.currentPage) - 1 : undefined);
    }

    sort = (sortBy, sortDirection) => {
        this.props.getBooks(sortBy, sortDirection);
    }
    componentDidUpdate(prevProps,prevState, snapshot)
    {
        console.log('matchParams - componentDidUpdate', this.props.location,prevProps.location);
        if (prevProps.location.pathname !== this.props.location.pathname){
            const matchParams = this.props.match.params;
            console.log('componentDidUpdate - firing getbooks', prevProps.location);
            this.props.getBooks(matchParams.sortBy, matchParams.sortDirection, matchParams.currentPage !== undefined ? parseInt(matchParams.currentPage) - 1 : undefined);
        }
    }
    render() {
        console.log("homecontainer - render");
        return (
            <section className="container homeSection" id="homeSection">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                        <div className="leftNavBar">
                            <SortOptions sort={this.sort} />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-3 col-xl-10">
                        <BooksList books = {this.props.books} />
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