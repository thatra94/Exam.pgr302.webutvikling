import * as actionTypes from '../actions/actionTypes';

export default function(state = [], action) {
    switch (action.type) {

        case actionTypes.SET_FOOD_LIST:
            /*const food = state.foodList.map(food => food);
            food.push(action.newFood);
            return food;*/

            return action.foodList.map(food => food);

/*        case actionTypes.CREATE_NEW_FOOD:
            const food = state.map( food => food);
            food.push(action.newFood);
            return food;
        case actionTypes.REMOVE_FOOD:
            return state.filter((data, i) => i !== action.id);
*/
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