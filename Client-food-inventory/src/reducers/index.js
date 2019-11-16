import { combineReducers } from 'redux';
import numberOfFoodReducer from "./NumberOfFoodReducer";
import FoodListReducer from "./FoodListReducer";
import contacts from './FoodReducer';

const allReducers = combineReducers(
    {
        numberOfFood: numberOfFoodReducer,
        foodList: FoodListReducer,
        contacts: contacts
    }
);

export default allReducers;
