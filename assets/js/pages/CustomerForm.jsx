import React, { Component } from 'react';
import Input from "../components/Input";
import axios from 'axios';

export default class CustomerForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            client: {
                lastname: '',
                firstname: '',
                email: ''
            }
        };
        this.handleSubmit.bind(this);
        // this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange ({ target }) {
        const { name, value } = target;
        const { client } = this.state;
        client[name] = value;
        this.setState({ client });
    }

    render() {
        const { lastname, firstname, email } = this.state.client;
        return (
            <div className="container bg-light rounded mt-5 py-3">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="form-group col-6">
                            <Input type="text" name="lastname" value={lastname} onChange={this.handleChange.bind(this)}>Nom</Input>
                        </div>
                        <div className="form-group col-6">
                            <Input type="text" name="firstname" value={firstname} onChange={this.handleChange.bind(this)}>Prénom</Input>
                        </div>
                        <div className="form-group col-6">
                            <Input type="email" name="email" value={email} onChange={this.handleChange.bind(this)}>Adresse email</Input>
                        </div>
                    </div>
                    <div className="text-right">
                        <button className="btn btn-success ">
                            <i className="fa fa-plus-square mr-2"/>
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        );
    }

}