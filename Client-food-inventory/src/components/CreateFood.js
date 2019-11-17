import React, { Component } from 'react';
import Axios from 'axios';
import * as foodActions from '../actions/index';
import {connect} from "react-redux";
import {applyMiddleware as dispatch} from "redux";
import {deleteFood} from "../actions";
import {getAllFood} from "../actions/index";



class CreateFood extends Component {


    constructor(props){
        super(props);
        this.state = {
            food: [],
            newName: "Legg til matvare",
            newPrice: 10,
            newType: "Type Mat"
        }
    }


    componentDidUpdate(prevProps) {
        const { foodList } = this.props;

        if (foodList !== prevProps.foodList) {
            this.props.getFoodList();
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

    listView(data, index){
        return (
            <div className="row" key={data.id}>
                <div className="col-md-10">
                    <li className="list-group-item clearfix" key={data.id}>
                        {data.id}
                        {data.name}
                        {data.price}
                        {data.type}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={(e) => this.deleteFood(data, index)} className="btn btn-danger">
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteFood(data, index) {
        console.log(data.id)
        let id = data.id;
        Axios.delete(`${"https://localhost:5001/food"}/${id}`)
            .then(response => {
                this.props.getFoodList();
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
        this.props.deleteFood(index);
    }

    postNewFood = (event) => {
        event.preventDefault();
        let newFood = {
            "name": this.state.newName,
            "price": this.state.newPrice,
            "type": this.state.newType
        };
        this.props.createFood(newFood);

        Axios.post("https://localhost:5001/food", newFood)
            .then(response => {
                this.props.getFoodList();
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });

    };
/*
    getFood = () => {
        return this.props.food.map(food => {
            return <p>{food.name}</p>
        });
    };*/

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


                <div className="container">
                    <h1>Clientside Food Application</h1>

                    <div>
                        {<ul className="list-group" >
                            {this.props.foodList.map((food, i) => this.listView(food, i))}
                        </ul>}
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state = {}) => {
    console.log(state.foodList);
    console.log("foodlist");
    console.log(state.food);
    return {
        food: state.food,
        foodList: state.foodList
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        createFood: food => dispatch(foodActions.createFood(food)),
        deleteFood: index => dispatch(foodActions.deleteFood(index)),
        getFoodList: () => dispatch(foodActions.getAllFood())
    }

};

export default connect(mapStateToProps,mapDispatchToProps)(CreateFood);


//export default CreateFood;
