import * as actionTypes from './actionTypes';


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


export const createFood = (contact) => {
    return {
        type: actionTypes.CREATE_NEW_FOOD,
        contact: contact
    }
};

export const deleteFood = (id) => {
    return {
        type: actionTypes.REMOVE_FOOD,
        id: id
    }
}
