import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AllFood from './AllFood';
import CreateFood from './CreateFood';

class Nav extends Component {
    render(){
        return (
            <section>
                <nav>
                <BrowserRouter>
                    <ul className="nav nav-tabs" key="nav">
                        <li className="nav-item" key="home">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item" key="Food">
                            <Link to="/createFood" className="nav-link" >Add Food</Link>
                        </li>
                    </ul>
                        <Switch>
                            <Route exact path="/" component={ AllFood } />
                            <Route path="/createFood" component={ CreateFood } />
                        </Switch>
                    </BrowserRouter>
                </nav>

            </section>
        )
    }
}



export default Nav;
