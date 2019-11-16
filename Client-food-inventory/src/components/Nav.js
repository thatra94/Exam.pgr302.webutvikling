import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AllFood from './AllFood';
import CreateFood from './CreateFood';
import App from './Test';

class Nav extends Component {
    render(){
        return (
            <section>
                <h3>Navigation</h3>
                <nav>
                    <BrowserRouter>
                        <ul>
                            <li><Link to="/">Vis alle</Link></li>
                            <li><Link to="/createFood">Ny matvare</Link></li>
                            <li><Link to="/app"/> app</li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={ AllFood } />
                            <Route path="/createFood" component={ CreateFood } />
                            <Route path="/app" component={ App }/>
                        </Switch>
                    </BrowserRouter>
                </nav>

            </section>
        )
    }
}

export default Nav;
