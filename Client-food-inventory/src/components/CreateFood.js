import React, { Component } from 'react';
import Axios from 'axios';

class CreateFood extends Component {

    constructor(props){
        super(props);

        
        this.state = {
            newName: "Legg til matvare",
            newPrice: 10,
            newType: "Type Mat"
        }

    }


    nameChange = (event ) => {
        let nameText = event.target.value;
        this.setState( { newName: nameText} );
    };

    priceChange = (event ) => {
        let priceText = parseInt(event.target.value);
        this.setState( {newPrice: priceText} );
    };
    typeChange = (event ) => {
        let typeText = event.target.value;
        this.setState( {newType: typeText} );
    };

/*
    handleChange(e) {
        this.setState({
            [e.target.type]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
            });
        this.setState({
            [e.target.type]: e.target.text === 'text' ? (e.target.value) : e.target.value
        });
    }*/
    postNewFood = (event) => {
        event.preventDefault();
        let newFood = {
            "name": this.state.newName,
            "price": this.state.newPrice,
            "type": this.state.newType
        };
        Axios.post("https://localhost:5001/food", newFood)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
    };

    render(){
        return (
            <section>
                <h3>Create food</h3>
                <form onSubmit={ this.postNewFood }>
                    <label>Ny matvare</label>
                    <input onChange={ this.nameChange } type="text" value={ this.state.newName } />
                    <input onChange={ this.priceChange } type="number" value={ this.state.newPrice } />
                    <input onChange={ this.typeChange } type="text" value={ this.state.newType } />

                    <input type="submit" value="Lagre matvare" />
                </form>
            </section>
        )
    }
}

export default CreateFood;
