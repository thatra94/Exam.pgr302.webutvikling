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
            <div class="container">
                <div className="row" key={data.id}>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item col-2">ID. {data.id}</li>
                        <li className="list-group-item col-2">Name: {data.name}</li>
                        <li className="list-group-item col-2">Price: {data.price}</li>
                        <li className="list-group-item col-2">Quantity: {data.quantity}</li>
                        <li className="list-group-item col-2">Type: {data.type}</li>

                        <button onClick={() => this.incrementQuantity(data)} className="btn btn-primary col-1">
                             +
                        </button>
                        <button onClick={() => this.decrementQuantity(data)} className="btn btn-secondary col-1">
                             -
                        </button>
                        <button onClick={() => this.deleteFood(data, index)} className="btn btn-danger col-2">
                            Remove
                        </button>
                    </ul>
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
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <input onChange={this.nameChange} type="text" className="form-control"
                                       placeholder="Food name" value={this.state.newName}/>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <input onChange={this.priceChange} type="number" className="form-control"
                                       placeholder="Price" value={this.state.newPrice}/>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <input onChange={this.quantityChange} type="number" className="form-control"
                                       placeholder="Quantity" value={this.state.newQuantity}/>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <input onChange={this.typeChange} type="text" className="form-control"
                                       placeholder="Category" value={this.state.newType}/>
                            </div>
                            <div className="col-sm-2 col-md-2 col-lg-2">
                                <input type="submit" value="Lagre matvare" className="btn btn-primary"/>
                            </div>
                        </div>


                    </form>

                    <h1>Clientside Food Application</h1>

                    <div class="container col-12">
                        <div>
                            <div className="list-group col-2">
                                {this.props.foodList.map((food, i) => this.listView(food, i))}
                            </div>
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


