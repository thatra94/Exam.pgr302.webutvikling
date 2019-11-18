import React, {Component} from 'react';
import Axios from 'axios';

class Home extends Component {
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

    render(){
        console.log(this.state.food);

        return (
            <section>
                <h3>This is a simple food inventory application</h3>
            </section>
        )
    }
}

export default Home;
