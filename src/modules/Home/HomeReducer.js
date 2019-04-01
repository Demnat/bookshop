import { GET_ALL_BOOKS, GET_BOOK, SORT_BOOKS } from './Home.actions';
import booksData from '../../data/books.json';
import {SORT_ASC, SORT_TITLE} from '../../data/variables.js';
const initialState = {
    
    books: booksData,
    selectedBook: {}

};

function getBookById(arr, id) {
    const selectedBook = arr.find(elem => elem.id === id);
    return selectedBook;
}

function compareStringsAsc(a, b) {
    return a.title.localeCompare(b.title,'pl');     
}

function compareStringsDesc(a, b) {
    return b.title.localeCompare(a.title,'pl');
}

function sortByTitle(data, sortDirection) {
    sortDirection === SORT_ASC 
        ? data.sort(compareStringsAsc)
        : data.sort(compareStringsDesc)
    return data;
}

function comparePriceAsc(a, b) {
    return a.price - b.price;
}

function comparePriceDesc(a, b) {
    return b.price - a.price;
}

function sortByPrice(data, sortDirection) {
    sortDirection === SORT_ASC 
        ? data.sort(comparePriceAsc)
        : data.sort(comparePriceDesc)
    return data;
}

const books = function (state = initialState, action) {
    console.log(action);
    switch (action.type) {

        case GET_ALL_BOOKS:
            return {...state, books: state.books};

        case GET_BOOK: 
            return {...state, selectedBook: getBookById(state.books, action.bookId)};

        case SORT_BOOKS:
            let booksToSort = {...state};
            let sortedBooks = booksToSort.books.concat();
            action.sortBy === SORT_TITLE 
                ? booksToSort.books = sortByTitle(sortedBooks, action.sortDirection)
                : booksToSort.books = sortByPrice(sortedBooks, action.sortDirection);    
            return {...state, books: booksToSort.books};

        default:
            return state;
    }   
}

export default books;