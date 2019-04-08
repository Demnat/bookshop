export const GET_BOOKS = 'GET_ALL_BOOKS';
export const GET_BOOK = 'GET_BOOK';
// export const SORT_BOOKS = 'SORT_BOOKS';

//w dalszej kolejności
export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const FILTER_BOOKS = 'FILTER_BOOKS';  // - jakie pole i wartość 

// export function getAllBooks() {
//     return {
//         type: GET_ALL_BOOKS
//     }
// }

export function getBook(bookId) {
    return {
        type: GET_BOOK,
        bookId
    }
}

export function getBooks(sortBy, sortDirection, currentPage) {
    return {
        type: GET_BOOKS,
        sortBy,
        sortDirection,
        currentPage
    }
}




//  export function sortBooks(sortBy, sortDirection) {
//      return {
//          type: GET_ALL_BOOKS,
//          sortBy,
//          sortDirection
//      }
//  }