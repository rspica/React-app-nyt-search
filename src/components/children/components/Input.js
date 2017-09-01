import React, { Component } from 'react';

//import "./Form.css";


export default class Input extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            value: '' 
        };
    }

    render() {

		return(
		    <div className="form-group">
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <input
                    className="form-control"
                    type="text"
                    id={ this.props.id }
                    name={ this.props.id }
                    onChange={ (ev) => {this.props.inputChangeHandler(ev.currentTarget.value, this.props.id)} }
                    value={ this.props.value }
                    placeholder={ this.props.placeholder }
                    required
                />

            </div>
		)
	}
}


