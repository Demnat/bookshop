import { GET_ALL_BOOKS, GET_BOOK } from './Home.actions';
import booksData from '../../data/books.json';

const initialState = {
    books: booksData,
    selectedBook: {}
    // cart: {
    //     products: [],
    //     summary: {
    //         cena: 0,
    //         amountBooks: 0,
    //         discount: 0
    //     }
    // }
};

function getBookById(arr, id) {
    const selectedBook = arr.find(elem => elem.id === id);
    return selectedBook;
}

const books = function (state = initialState, action) {
    console.log(action);
    switch (action.type) {

        case GET_ALL_BOOKS:
            // return Object.assign({}, state, {books: state.books})
            return {...state, books: state.books};

        case GET_BOOK: 
            console.log('homereducer get book', getBookById(state.books, action.bookId))
            return {...state, selectedBook: getBookById(state.books, action.bookId)};

        default:
            return state;
    }   
}

export default books;