import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreateFood from './CreateFood';

class Nav extends Component {
    render(){
        return (
            <section>
                <nav>
                <BrowserRouter>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/createFood" className="nav-link" >Add Food</Link>
                        </li>
                    </ul>
                        <Switch>
                            <Route exact path="/" component={ Home } />
                            <Route path="/createFood" component={ CreateFood } />
                        </Switch>
                    </BrowserRouter>
                </nav>

            </section>
        )
    }
}



export default Nav;
