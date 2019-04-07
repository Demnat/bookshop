import { GET_BOOKS, GET_BOOK } from './Home.actions';
import booksData from '../../data/books.json';
import {SORT_ASC, SORT_TITLE} from '../../data/variables.js';
const initialState = {
    
    books: booksData,
    selectedBook: {},
    currentPage: 0,
    pageBooksAmount: 6,
    pages: 0,
    sortData: {
        sortBy: 'price',
        sortDirection: 'asc'
    },

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

function sortBooks (books, sortBy, sortDirection) {
    return sortBy === SORT_TITLE 
        ? sortByTitle(books, sortDirection)
        : sortByPrice(books, sortDirection);
}

function paginateBooks(books, amountItemsOnPage, currentPage) {
    return books.slice(amountItemsOnPage * currentPage, amountItemsOnPage * (currentPage + 1));
}


const HomeReducer = function (state = initialState, action) {
    console.log(action);
    switch (action.type) {

        case GET_BOOKS:
            let books = booksData;
            let sortActionData = state.sortData;
            if (action.sortBy !== undefined || state.sortData !== null) {
                sortActionData = {
                    sortBy: action.sortBy !== undefined ? action.sortBy : state.sortData.sortBy,
                    sortDirection: action.sortDirection !== undefined ? action.sortDirection: state.sortData.sortDirection
                }
                books = sortBooks(books, sortActionData.sortBy, sortActionData.sortDirection);
            }
            const pages = Math.ceil(books.length / state.pageBooksAmount);
            const currentPage = action.currentPage !== undefined ? action.currentPage : 0;
            books = paginateBooks(books, state.pageBooksAmount, currentPage);

            return {...state, books: books, sortData: sortActionData, pages: pages, currentPage : currentPage};

        case GET_BOOK: 
            return {...state, selectedBook: getBookById(state.books, action.bookId)};

        // case SORT_BOOKS:
        //     let booksToSort = {...state};
        //     let sortedBooks = booksToSort.books.concat();
        //     action.sortBy === SORT_TITLE 
        //         ? booksToSort.books = sortByTitle(sortedBooks, action.sortDirection)
        //         : booksToSort.books = sortByPrice(sortedBooks, action.sortDirection);    
        //     return {...state, books: booksToSort.books};

        
        default:
            return state;
    }   
}

export default HomeReducer;