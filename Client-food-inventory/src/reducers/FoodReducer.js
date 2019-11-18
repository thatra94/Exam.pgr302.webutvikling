import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_FOOD:
            return [
                ...state,
                Object.assign({}, action.food)
            ];
        case actionTypes.REMOVE_FOOD:
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
};