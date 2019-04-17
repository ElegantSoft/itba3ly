import * as types from '../types';
const initialState = {
    products:[]
}

export default  (state = initialState, action) => {
    switch (action.type) {
    
    case types.FETCH_PRODUCTS:
        return { ...state,products:action.payload }
    case types.SET_ITEM_ID:
        return {...state,itemId: action.payload}
    default:
        return state
    }
}
