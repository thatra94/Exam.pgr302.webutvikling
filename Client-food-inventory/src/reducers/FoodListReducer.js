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
export default FoodListReducer;
