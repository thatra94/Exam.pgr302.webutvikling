import Axios from "axios";

export function update(data) {
    Axios.put("https://localhost:5001/food", data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}

export function deleteFoodById(data) {
    Axios.delete(`${"https://localhost:5001/food"}/${data.id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}

export function postFood(newFood) {
    Axios.post("https://localhost:5001/food", newFood)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}
