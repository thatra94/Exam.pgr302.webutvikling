import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiUrl = "https://localhost:5001/food";

export const addFood = ( newFood ) => {
    return {
        type: "ADD_FOOD",
        newFood
    }
};

export const incrementFood = () => {
    return {
        type: "INCREMENT_FOOD"
    };
};


export const createFood = (food) => {
    return {
        type: actionTypes.CREATE_NEW_FOOD,
        food: food
    }
};

export const deleteFood = (id) => {
    return {
        type: actionTypes.REMOVE_FOOD,
        id: id
    }
};

export const getAllFood = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(getFood(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};


function getFood(foodList) {
    return {
        type: actionTypes.SET_FOOD_LIST,
        foodList: foodList
    };
}
