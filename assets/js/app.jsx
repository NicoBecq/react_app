/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import '../css/app.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { BrowserRouter, HashRouter, Switch, Route, withRouter } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import CustomerForm from "./pages/CustomerForm";
import LoginPage from "./pages/LoginPage";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            user: {}
        }
        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    componentDidMount() {
        const { user } = window;
        this.setState({
            isAuthenticated: user !== null,
            user: user !== null ? user : {}
        });
    }

    onLogin(user) {
        this.setState({user: user, isAuthenticated: true});
    }

    onLogout() {
        this.setState({user: {}, isAuthenticated: false});
    }

    render() {
        const NavbarWithRouter = withRouter(Navbar);
        return (
            <HashRouter>
            {/*<BrowserRouter>*/}
                <NavbarWithRouter isAuthenticated={this.state.isAuthenticated} onLogout={this.onLogout} />
                <main>
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/login" render={props =>
                            <LoginPage onLogin={this.onLogin} {...props} />
                        } />
                        <Route path="/clients" component={CustomersPage} />
                        <Route path="/client/ajouter" component={CustomerForm} />
                    </Switch>
                </main>
            </HashRouter>
            // </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

