import React, { Component } from 'react';
import * as axios from '../actions/Axios'
import * as foodActions from '../actions/index';
import {connect} from "react-redux";


class CreateFood extends Component {


    constructor(props){
        super(props);
        this.state = {
            newName: "Legg til matvare",
            newPrice: 10,
            newQuantity: 0,
            newType: "Type Mat"
        }
    }

    componentDidUpdate(prevProps) {
        const {foodList} = this.props;
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


    quantityChange = (event ) => {
        let quantityText = parseInt(event.target.value);
        this.setState( {newQuantity: quantityText} );
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
                        {data.quantity}
                        {data.type}
                    </li>
                </div>
                <div className="col-md-2">
                    <button onClick={() => this.deleteFood(data, index)} className="btn btn-danger">
                        Remove
                    </button>
                    <button onClick={() => this.incrementQuantity(data) } className="btn btn-danger">
                        Quantity +
                    </button>
                    <button onClick={() => this.decrementQuantity(data) } className="btn btn-danger">
                        Quantity -
                    </button>
                </div>
            </div>
        )
    }

    incrementQuantity(data) {
        this.props.incrementFood(data);
        console.log(data);
        axios.update(data);
    }

    decrementQuantity(data) {
        this.props.decrementFood(data);
        console.log(data);
        axios.update(data);
    }

    deleteFood(data, index) {
        axios.deleteFoodById(data);
        this.props.deleteFood(index);
    }

    postNewFood = (event) => {
        event.preventDefault();
        let newFood = {
            "name": this.state.newName,
            "price": this.state.newPrice,
            "quantity": this.state.newQuantity,
            "type": this.state.newType
        };
        this.props.createFood(newFood);
        axios.postFood(newFood);
    };

    render(){
        return (
            <section>
                <h3>Create food</h3>
                <form onSubmit={ this.postNewFood }>
                    <label>Ny matvare</label>
                    <input onChange={ this.nameChange } type="text" value={ this.state.newName } />
                    <input onChange={ this.priceChange } type="number" value={ this.state.newPrice } />
                    <input onChange={ this.quantityChange } type="number" value={ this.state.newQuantity } />
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
    return {
        foodList: state.foodList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createFood: food => dispatch(foodActions.createFood(food)),
        deleteFood: index => dispatch(foodActions.deleteFood(index)),
        getFoodList: () => dispatch(foodActions.getAllFood()),
        incrementFood: quantity => dispatch(foodActions.incrementFood(quantity)),
        decrementFood: quantity => dispatch(foodActions.decrementFood(quantity))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(CreateFood);


//export default CreateFood;
