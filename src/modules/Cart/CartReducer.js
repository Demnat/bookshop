import { GET_DATA_CART, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT_OF_BOOKS } from './Cart.actions';


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

function changeAmount(item, newAmount) {
    item.bookAmount = newAmount;
    item = countItemPrice(item);
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
    arr.map(item => summaryPrice += item.booksPrice);
    return summaryPrice;
}

function countSummary(products, oldSummary) {
    const sum = countSummaryPrice(products);
    return {...oldSummary, price:sum, totalPrice: sum + oldSummary.postingPrice};    
}

const CartReducer = function (state = initialState, action) {
    console.log("cart reducer",action);
    switch (action.type) {

        case GET_DATA_CART:
            console.log(state);
            return {...state};

        case ADD_TO_CART:
            let newState = {...state};
            let item = getItemById(newState.products, action.book.id);
            if (isInCart(item, action.book.id)) {
                item = changeAmount(item, item.bookAmount + 1);
                item = countItemPrice(item);
                const index = newState.products.findIndex(item => item.book.id === action.book.id);
                newState.products[index] = item;   
            } else 
                newState = { ...newState, products: addNewItem(newState.products, action.book) }
            newState.summary.price = countSummaryPrice(newState.products);
            newState.summary.totalPrice = newState.summary.price + newState.summary.postingPrice;
            return {...newState};
                    
            case REMOVE_FROM_CART:    
                state.products = state.products.filter(item => item.book.id !== action.bookId);
                state.summary.price = countSummaryPrice(state.products);
                state.summary.totalPrice = state.summary.price + state.summary.postingPrice;
                return {...state};

            case CHANGE_AMOUNT_OF_BOOKS:    
                let newAmountState = {...state};
                let newAmountProducts = newAmountState.products.concat();
                let newAmountSummary = newAmountState.summary;          
                const changedItem = changeAmount(getItemById(newAmountProducts, action.bookId), action.i);             
                const index = newAmountProducts.findIndex(item => item.book.id === action.bookId);
                newAmountState.products[index] = changedItem;
                newAmountState.summary = countSummary(newAmountState.products, newAmountSummary);         
                return {...newAmountState};

        default:
            return state;
    }   
}

export default CartReducer;

