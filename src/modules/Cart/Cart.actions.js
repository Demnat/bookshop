export const GET_DATA_CART = 'GET_DATA_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_AMOUNT_OF_BOOKS = 'CHANGE_AMOUNT_OF_BOOKS';
export const TOTAL_CART = 'TOTAL_CART';
export const ADD_DISCOUNT = 'ADD_DISCOUNT';
export const RESET_DATA_CART = 'RESET_DATA_CART';

//w dalszej kolejności:
// opcje dostawy
// waga przesyłki
// dane do wysyłki itd.

export function getDataCart() {
    return {
        type: GET_DATA_CART
    }
}

export function addToCart(book) {
    return {
        type: ADD_TO_CART,
        book
    }
}

export function removeFromCart(bookId) {
    return {
        type: REMOVE_FROM_CART,
        bookId
    }
}

export function changeAmountOfBooks(bookId, i) {
   return {
        type: CHANGE_AMOUNT_OF_BOOKS,
        bookId,
        i
    }  
}

export function addDiscount(code) {
    return {
        type:ADD_DISCOUNT,
        code
    }
}

export function resetDataCart() {
    return {
        type: RESET_DATA_CART
    }
}
