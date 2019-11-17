import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiUrl = "https://localhost:5001/food";

export const incrementFood = (food) => {
    return {
        type: actionTypes.INCREMENT_QUANTITY,
        food
    };
};

export const decrementFood = (food) => {
    return {
        type: actionTypes.DECREMENT_QUANTITY,
        food
    };
};


export const createFood = (food) => {
    return {
        type: actionTypes.CREATE_NEW_FOOD,
        food
    }
};

export const deleteFood = (id) => {
    return {
        type: actionTypes.REMOVE_FOOD,
        id
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
