import React, { Component } from 'react';

import Input from "./Input"

export default class Btn extends Component {
	// constructor (props) {
 //        super(props);
 //        this.state = {
 //      		searchSbjt: props.searchSbjt,
 //      		startYr: props.startYr,
 //      		endYr: props.endYr
 //    }
 //    }
    // handleSubmit = (ev) => {
    // ev.preventDefault();
    //   console.log('something was entered');
    //   console.log('this.state: ', this.state)
    // }


	render() {

		return(
              <button 
              onClick={ (ev) => { ev.preventDefault(); 
                                  this.props.handleSubmit();
                                  this.props.handleClick()} 
                                } 
              className="btn btn-default btn-sm" 
              type= { this.props.type } >
              <span className={ this.props.btnIcon }></span>
              	{ this.props.label }
              </button>
		)
	}
}



