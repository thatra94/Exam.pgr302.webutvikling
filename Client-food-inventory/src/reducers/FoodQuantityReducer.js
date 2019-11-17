import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) =>{
    switch (action.type) {
        case actionTypes.INCREMENT_QUANTITY:
            let object = Object.assign({}, action);
            object.quantity.price = object.quantity.price +1;
            return object;

        /*action = action.price +1;
        return action;*/
            case actionTypes.DECREMENT_QUANTITY:
            return state - 1;
        default:
            return state;
    }
};

