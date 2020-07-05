import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <>
                <label htmlFor={this.props.name}>{this.props.children}</label>
                <input type={this.props.type} name={this.props.name} id={this.props.name}
                       className={'form-control ' + this.props.className} placeholder={this.props.children} value={this.props.value}
                    onChange={this.props.onChange}/>
            </>
        );
    }
}