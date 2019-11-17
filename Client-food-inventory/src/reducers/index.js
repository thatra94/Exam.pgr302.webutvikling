import { combineReducers } from 'redux';
import numberOfFoodReducer from "./FoodQuantityReducer";
import FoodListReducer from "./FoodListReducer";
import food from './FoodReducer';

const allReducers = combineReducers(
    {
        numberOfFood: numberOfFoodReducer,
        foodList: FoodListReducer,
        food: food
    }
);

export default allReducers;
