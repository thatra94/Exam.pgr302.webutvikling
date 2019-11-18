import * as actionTypes from '../actions/actionTypes';

export default function(state = [], action) {

    switch (action.type) {
        case actionTypes.SET_FOOD_LIST:
            let object = Object.assign({}, action);
            object.foodList = object.foodList.map(food => food);
            return object.foodList;
            default:
            return state;
    }
}


