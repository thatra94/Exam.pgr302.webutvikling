import React, { useState } from 'react';
import Nav from './components/Nav';
import { useSelector, useDispatch } from 'react-redux';
import { incrementFood, addFood } from './actions';




function App() {


    return (
        <div>
            <Nav/>

        </div>

    );
}

export default App;

