import { GET_ALL_PRODUCTS_IN_CART, ADD_TO_CART } from './Cart.actions';


const initialState = {
    products: [],
    summary: {
         price: 0,  
         postingPrice: 13.99,
         discount: 0,
         totalPrice: 0
    }

    //     products: [
    //          {
    //              book: {},
    //              bookAmount: 0,
    //              booksPrice: 0
    //          },
    //      ],
    //     summary: {
    //          price: 0,
    //          amountBooks: 0,           <- na później do liczenia wagi
    //          postingPrice: 13.99,
    //          discount: 0,
    //          totalPrice: 0
    //     }

};

function getItemById(arr, id) {
    const item = arr.find(elem => elem.book.id === id);
    return item;
}

function increaseAmount(item,i) {
    item.bookAmount +=i;
    return item;
}

function reduceAmount(item,i) {
    item.bookAmount-=i;
    return item;
}

function isInCart(item, id) {
    return item != null && item.book.id === id;;
}

function addNewItem(arr, item) {
    const newItem = {
        book: item,
        bookAmount: 1,
        booksPrice: item.price
    };
    arr.push(newItem);
    return arr;
}

function countItemPrice(item) { 
    item.booksPrice = item.book.price * item.bookAmount;
    return item;
}

function countSummaryPrice(arr) {
    let summaryPrice = 0;
    console.log("countSummaryPrice", arr);
    arr.map(item => summaryPrice + item.booksPrice);
    return summaryPrice;
}

const CartReducer = function (state = initialState, action) {
    console.log("cart reducer",action);
    switch (action.type) {

        case GET_ALL_PRODUCTS_IN_CART:
            return {...state, products: state.products};

        case ADD_TO_CART:
            let newState = state;
            let item = getItemById(newState.products, action.book.id);
            if (isInCart(item, action.book.id)) {
                item = increaseAmount(item,1);
                item = countItemPrice(item);
                const index = newState.products.findIndex(f => f.book.id == action.book.id);
                newState.products[index] = item;   
            } else 
                newState = { ...newState, products: addNewItem(newState.products, action.book) }
            newState.summary.price = countSummaryPrice(newState.products);
            newState.summary.totalPrice = newState.summary.price + newState.summary.postingPrice;
            console.log("after add", newState);
            return newState;
                    
            
            


            // if (czyIstniejeWKoszyku())
            //     zwiekszNaklad();
            // else
            //     dodajNowy();
            // przeliczKoszyk();
            // return ...;
        // case Zmien_naklad:
            // zmiennaklad();
            // rzeliczKoszyk();
        //     // return Object.assign({}, state, {books: state.books})
        //     return {...state, books: state.books};

        // case GET_BOOK: 
        //     console.log('homereducer get book', getBookById(state.books, action.bookId))
        //     return {...state, selectedBook: getBookById(state.books, action.bookId)};

        default:
            return state;
    }   
}

export default CartReducer;

