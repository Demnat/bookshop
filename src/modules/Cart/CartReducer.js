import { GET_DATA_CART, ADD_TO_CART, REMOVE_FROM_CART, CHANGE_AMOUNT_OF_BOOKS, ADD_DISCOUNT, RESET_DATA_CART } from './Cart.actions';
import { isValidCodeForCart, addDiscountToCart } from '../../data/discount';

const initialState = {
    products: [],
    discount: null,
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
        booksPrice: item.price,
        oldBooksPrice : item.price
    };
    arr.push(newItem);
    return arr;
}

function countItemPrice(item) { 
    item.booksPrice = item.book.price * item.bookAmount;
    item.oldBooksPrice = item.booksPrice;
    return item;
}

function countSummaryPrice(arr) {
    let summaryPrice = 0;
    let oldSummaryPrice = 0;
    arr.forEach(item => {
        summaryPrice += item.booksPrice;
        oldSummaryPrice += item.oldBooksPrice;
    });
    return {
        summaryPrice,
        oldSummaryPrice
    };
}

function countSummary(products, oldSummary) {
    const sum = countSummaryPrice(products);
    return {...oldSummary,
         price:sum.summaryPrice, 
         totalPrice: sum.summaryPrice + oldSummary.postingPrice,
         discount: sum.oldSummaryPrice - sum.summaryPrice
    };
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
                newState = { ...newState, products: addNewItem(newState.products, action.book) };
            if (newState.discount !== null && newState.discount.isValid ) {
                newState = addDiscountToCart(newState.discount.code, newState);
            }
            return {...newState, summary:countSummary(newState.products, newState.summary)};
                    
        case REMOVE_FROM_CART:    
            state.products = state.products.filter(item => item.book.id !== action.bookId);
            if (state.discount !== null ) {
                state = addDiscountToCart(state.discount.code, state);
            }
            state.summary = countSummary(state.products, state.summary);         
            return {...state};

        case CHANGE_AMOUNT_OF_BOOKS:    
            let newAmountState = {...state};
            if (action.i > 0 && action.i < 100) {
                let newAmountProducts = newAmountState.products.concat();
                let newAmountSummary = newAmountState.summary;          
                const changedItem = changeAmount(getItemById(newAmountProducts, action.bookId), action.i);             
                const index = newAmountProducts.findIndex(item => item.book.id === action.bookId);
                newAmountState.products[index] = changedItem;
                if (newAmountState.discount !== null) {
                    newAmountState = addDiscountToCart(newAmountState.discount.code, newAmountState);
                }
                newAmountState.summary = countSummary(newAmountState.products, newAmountSummary);         
            }
            return {...newAmountState};

        case ADD_DISCOUNT:
            let cart = {...state};
            cart = isValidCodeForCart(action.code, cart);
            if (cart.discount.isValid) {
                cart = addDiscountToCart(action.code, cart);
            }
            return {...cart, discount: cart.discount, summary: countSummary(cart.products, cart.summary)};
        
        case RESET_DATA_CART:
            let resetState = {...state};  
            resetState =  {
                    products: [],
                    discount: null,
                    summary: {
                        price: 0,  
                        postingPrice: 13.99,
                        discount: 0,
                        totalPrice: 0
                    }
                };
            return  {...resetState};

        default:
            return state;
    }   
}

export default CartReducer;

