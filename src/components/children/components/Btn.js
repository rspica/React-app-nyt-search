import React, { Component } from 'react';


export default class Btn extends Component {
	// constructor (props) {
 //        super(props);
 //        this.state = {
 //      		searchSbjt: props.searchSbjt,
 //      		startYr: props.startYr,
 //      		endYr: props.endYr
 //    }
 //    }



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



