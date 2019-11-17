import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {getAllFood} from "./actions";


const foodStore = createStore( allReducers, applyMiddleware(thunk) );

foodStore.dispatch(getAllFood());
ReactDOM.render(
    <Provider store={foodStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);
