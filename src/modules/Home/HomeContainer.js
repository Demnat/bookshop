import React, { Component } from 'react';
import { connect } from 'react-redux';
import SortOptions from './SortOptions';
import BooksList from './BooksList';
import Pagination from './Pagination';
import { getAllBooks } from './Home.actions';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getAllBooks());
    }

    render() {
        console.log(props);
        return (
            <section className="container homeSection" id="homeSection">
                <div className="row">
                    <div className="col-sm-12 col-md-3 col-lg-2 col-xl-2">
                        <div className="leftNavBar">
                            <SortOptions />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-9 col-xl-10">
                        <BooksList books={props.books}/>
                        <Pagination />
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        books: store.books
    };
};

export default connect(mapStateToProps)(HomeContainer);