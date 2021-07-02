import { ADD, REMOVE } from "../types";

const initialState = '';

const m_orderReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD:
            return action.payload;
        case REMOVE:
            return initialState;
    }
}

export default m_orderReducer;