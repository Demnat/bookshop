/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import books from './modules/Home/HomeReducer';
import CartReducer from './modules/Cart/CartReducer';


// Combine all reducers into one root reducer
const reducer = combineReducers({
    books,
    CartReducer,
});

export default reducer;