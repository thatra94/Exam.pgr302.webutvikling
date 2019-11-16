import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

const carRacingStore = createStore( allReducers );

ReactDOM.render(
    <Provider store={carRacingStore}>
        <App />
    </Provider>
    , document.getElementById('root')
);
