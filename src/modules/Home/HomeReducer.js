import { GET_ALL_BOOKS } from './Home.actions';
import booksData from '../../data/books.json';

const initialState = {
    books: booksData
    // cart: {
    //     products: [],
    //     summary: {
    //         cena: 0,
    //         amountBooks: 0,
    //         discount: 0
    //     }
    // }
}

const books = function (state = initialState, action) {
    switch (action.type) {

        case GET_ALL_BOOKS:
            // return Object.assign({}, state, {books: state.books})
            return {...state, books: state.books}

        default:
            return state;
    }   
}

export default books;