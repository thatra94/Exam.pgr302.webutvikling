import Axios from "axios";

const apiUrl = "https://localhost:5001/food";

export function update(data) {
    Axios.put(apiUrl, data)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}

export function deleteFoodById(data) {
    Axios.delete(`${apiUrl}/${data.id}`)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}

export function postFood(newFood) {
    Axios.post(apiUrl, newFood)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        });
}
