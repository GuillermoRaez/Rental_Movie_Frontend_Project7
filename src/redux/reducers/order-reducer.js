import { ADD, REMOVE } from "../types";

const initialState = '';

const orderReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return action.payload;
        case REMOVE:
            return initialState;
        default: 
            return state
    }
}

export default orderReducer;