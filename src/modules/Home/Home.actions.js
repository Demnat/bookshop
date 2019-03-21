export const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
export const GET_BOOK = 'GET_BOOK';
export const SORT_BOOK = 'SEARCH_BOOKS';

//w dalszej kolejności
export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const FILTER_BOOKS = 'FILTER_BOOKS';  //czy SET? // - jakie pole i wartość 

export function getAllBooks() {
    return {
        type: GET_ALL_BOOKS
    }
}

export function getBook(bookId) {
    return {
        type: GET_BOOK,
        bookId
    }
}

export function sortBook(sortBy, sortDirection) {
    return {
        type: SORT_BOOK,
        sortBy,
        sortDirection
    }
}