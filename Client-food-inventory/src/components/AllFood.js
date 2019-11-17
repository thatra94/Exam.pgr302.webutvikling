import React, {Component} from 'react';
import Axios from 'axios';

class AllFood extends Component {
    constructor(props){
        super(props);
        this.state = {
            food: [ {} ]
        }
    }
    componentDidMount(){
        Axios.get("https://localhost:5001/food")
            .then( response => {
                this.setState( { food: response.data } );
            });
    }
    getFood = () => {
        return this.state.food.map(food => {
            return <p>{food.name}</p>
        });

    };

    render(){
        console.log(this.state.food);

        return (
            <section>
                <h3>All food</h3>
                <section>
                    { this.getFood() }
                </section>

            </section>
        )
    }
}

export default AllFood;
