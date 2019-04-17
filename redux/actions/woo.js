import * as types from '../types';
import wp from '../../constants/WooAPI';
export const fetchProducts = () =>{
    return (dispatch) => {
        wp.get('products')
        .then(products =>{
            dispatch({type: types.FETCH_PRODUCTS,payload:products})
        })
    }
}
export const setItemId = (id) => {
    return {
        type: types.SET_ITEM_ID,
        payload: id
    }
}