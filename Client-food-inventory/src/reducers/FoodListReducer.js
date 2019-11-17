import * as actionTypes from '../actions/actionTypes';

export default function(state = [], action) {

    switch (action.type) {
        case actionTypes.SET_FOOD_LIST:
            let object = Object.assign({}, action);
            object.foodList = object.foodList.map(food => food);
            return object.foodList;

           // return action.foodList.map(food => food);
        default:
            return state;
    }
}


/*
const FoodListReducer = (state = ["Laks", "Kjøtt"], action) => {
    switch (action.type) {
        case "ADD_FOOD":
            const food = state.map( food => food);
            food.push(action.newFood);
            return food;
        default:
            return state;
    }
}
export default FoodListReducer;*/