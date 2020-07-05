import React, {Component} from 'react';
import axios from 'axios';
import AuthApi from "../service/AuthApi";

import '../../css/login.css';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                username: '',
                password: ''
            },
            error: '',
            success: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            await AuthApi.login(this.state.credentials);
            this.setState({error: '', success: 'Vous êtes connecté.'});
            this.props.onLogin(true);
            this.props.history.replace('/');
        } catch (error) {
            this.setState({error: error, success: ''});
            this.props.onLogin(false);
        }
    }

    handleChange({target}) {
        const {name, value} = target;
        let credentials = {...this.state.credentials};
        credentials[name] = value;
        this.setState({credentials});
        this.setState({error: '', success: ''});
    }

    render() {
        const {username, password} = this.state.credentials;
        const {error, success} = this.state;
        return (
            <>
                {success && <div className="alert alert-success">{success}</div>}
                <form className="form-signin mt-5" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Identifiant</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className={"form-control" + (error && ' is-invalid')}
                            placeholder="Identifiant"
                            value={username}
                            onChange={this.handleChange}
                            autoFocus
                        />
                        {error && <p className="invalid-feedback">{error}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className={"form-control" + (error && ' is-invalid')}
                            placeholder="Mot de passe"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Connexion</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2020</p>
                </form>
            </>
        );
    }

}