export const GET_ALL_PRODUCTS_IN_CART = 'GET_ALL_PRODUCTS_IN_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_AMOUNT_OF_BOOKS = 'INCREASE_AMOUNT_OF_BOOKS';
export const REDUCE_AMOUNT_OF_BOOKS = 'REDUCE_AMOUNT_OF_BOOKS';
export const TOTAL_CART = 'TOTAL_CART';
export const ADD_DISCOUNT = 'ADD_DISCOUNT';


//w dalszej kolejności
// opcje rabatów
// opcje dostawy
// waga przesyłki
// dane do wysyłki itd.

export function getAllProductsInCart() {
    return {
        type: GET_ALL_PRODUCTS_IN_CART
    }
}

export function addToCart(book) {
    return {
        type: ADD_TO_CART,
        book
    }
}


