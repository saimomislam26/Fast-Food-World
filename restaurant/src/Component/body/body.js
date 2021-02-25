import React from 'react';
import Menu from './menu';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Route, Redirect, Switch } from 'react-router-dom';

const Body = () => {

    return (
        <div>
            <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/Menu" exact component={Menu} />
                <Route path="/About" exact component={About} />
                <Route path="/Contact" exact component={Contact} />
                <Redirect from="/" to="/home" />
            </Switch>

        </div>
    );
}

export default Body;