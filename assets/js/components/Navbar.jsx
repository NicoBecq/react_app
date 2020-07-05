import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApi from "../service/AuthApi";
import axios from "axios";

export default class Navbar extends Component {

    constructor(props) {
        super(props);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    async handleLogoutClick(event) {
        await AuthApi.logout();
        this.props.history.push('/login');
        this.props.onLogout(false);
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-light bg-dark">
                <span className="navbar-brand mb-0 h1">
                    <Link to={"/"} className="nav-link">Home</Link>
                </span>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item text-white">
                        <Link to={"/clients"} className="nav-link">Clients</Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    {this.props.isAuthenticated === true ?
                        <li className="nav-item text-white">
                            <button className="btn btn-danger" onClick={this.handleLogoutClick}>Logout</button>
                        </li>
                    :   <li className="nav-item text-white">
                            <Link to={"/login"} className="btn btn-success">Login</Link>
                        </li>
                    }
                </ul>
            </nav>
        );
    }

}