import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import CustomerForm from "./CustomerForm";

export default class CustomersPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clients: []
        }
    }

    componentDidMount() {
        axios.get('/api/clients?page=1')
            .then(response => response.data['hydra:member'])
            .then(clients => this.setState({clients: clients}));
    }

    render() {
        return (
            <div className={'container bg-light rounded mt-5 py-3'}>
                <h1>Liste des clients</h1>
                <Link to="/client/ajouter" className="btn btn-success mb-2 pull-right">
                    <i className="fa fa-plus-square mr-2"></i>
                    Ajouter
                </Link>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th className="pl-1">id</th>
                            <th className="pl-1">Nom</th>
                            <th className="pl-1">Prénom</th>
                            <th className="pl-1">Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.clients.map(client =>
                        <tr key={client.id}>
                            <td className="p-1">{client.id}</td>
                            <td className="p-1">{client.lastname}</td>
                            <td className="p-1">{client.firstname}</td>
                            <td className="p-1">{client.email}</td>
                            <td className="col-1 p-1">
                                <div className="d-flex justify-content-around">
                                    <button className="btn btn-warning btn-sm">
                                        <i className="fa fa-edit text-light"></i>
                                    </button>
                                    <button className="btn btn-danger btn-sm">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}

