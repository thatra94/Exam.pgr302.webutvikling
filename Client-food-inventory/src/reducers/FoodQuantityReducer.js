import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
    switch (action.type) {

        case actionTypes.INCREMENT_QUANTITY:

            let object = Object.assign({}, action);
            object.food.quantity = object.food.quantity + 1;
            return object;

        case actionTypes.DECREMENT_QUANTITY:

            let decrementFood = Object.assign({}, action);
            decrementFood.food.quantity = decrementFood.food.quantity - 1;
            return decrementFood;

        default:
            return state;
    }
};

