import {combineReducers} from 'redux';
import credentials from './credentials-reducer';
import order from './order-reducer';
import movie from './movie-reducer';

const rootReducer = combineReducers({
    credentials,
    order,
    movie
});

export default rootReducer;