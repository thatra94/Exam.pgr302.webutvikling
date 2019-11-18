import React, { Component } from 'react';
import * as axios from '../actions/Axios'
import * as foodActions from '../actions/index';
import {connect} from "react-redux";


class CreateFood extends Component {


    constructor(props){
        super(props);
        this.state = {
            newName: "",
            newPrice: "",
            newQuantity: "",
            newType: ""
        }
    }

    componentDidMount() {
        this.props.getFoodList();
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

    listView(data, index) {
        return (
            <div className="container" key={index}>
                <div className="row col-12 col-sm-12 col-md-12 col-lg-12 mt-5">
                    <div className="card col-12 col-lg-12">ID {data.id}</div>
                    <div className="card col-12 col-md-6 col-lg-3">Name {data.name}</div>
                    <div className="card col-12 col-md-6 col-lg-3">Price {data.price}</div>
                    <div className="card col-12 col-md-6 col-lg-3">Quantity {data.quantity}</div>
                    <div className="card col-12 col-md-6 col-lg-3">Type {data.type}</div>
                    <button onClick={() => this.deleteFood(data, index)} className="btn btn-danger col-12 col-md-12 col-lg-6">
                        Remove
                    </button>
                    <button onClick={() => this.incrementQuantity(data)} className="btn btn-primary col-12 col-md-6 col-lg-3">
                        +
                    </button>
                    <button onClick={() => this.decrementQuantity(data)} className="btn btn-secondary col-12 col-md-6 col-lg-3">
                        -
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

    render() {
        return (
            <section>

                <div className="container">

                    <h3>Create food</h3>

                    <form onSubmit={this.postNewFood}>
                        <div className="form-row">
                            <div className="col-12 col-sm-12 col-lg-3">
                                <input onChange={this.nameChange} type="text" className="form-control"
                                       placeholder="Food name" value={this.state.newName} required/>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-3">
                                <input onChange={this.priceChange} type="number" className="form-control"
                                       placeholder="Price" value={this.state.newPrice} required/>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-3">
                                <input onChange={this.quantityChange} type="number" className="form-control"
                                       placeholder="Quantity" value={this.state.newQuantity} required/>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-3">
                                <select onChange={this.typeChange} className="custom-select custom-select-md mb-3">
                                    <option defaultValue="Food">Food</option>
                                    <option value="Vegetable">Vegetable</option>
                                    <option value="Fish">Fish</option>
                                    <option value="Meat">Meat</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                <input type="submit" value="Save" className="btn btn-primary col-12 col-sm-12 col-md-12 col-lg-12"/>
                            </div>
                        </div>
                    </form>

                        <h1>INVENTORY</h1>

                        <div>
                            <div className="list-group col-12">
                                {this.props.foodList.map((food, i) => this.listView(food, i))}
                            </div>
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


