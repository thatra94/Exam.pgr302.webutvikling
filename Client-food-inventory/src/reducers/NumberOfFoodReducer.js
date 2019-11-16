const numberOfFoodReducer = (state = 0, action) =>{
    switch (action.type) {
        case "INCREMENT_FOOD":
            return state + 1;
        case "DECREMENT_FOOD":
            return state - 1;
        default:
            return state;
    }
}

export default numberOfFoodReducer;
