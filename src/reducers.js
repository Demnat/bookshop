/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import books from './modules/Home/HomeReducer';
// import cart from './modules/Cart/CartReducer';


// Combine all reducers into one root reducer
const reducer = combineReducers({
    books,
    // cart,
});

export default reducer;