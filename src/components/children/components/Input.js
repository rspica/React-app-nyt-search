import React, { Component } from 'react';

import Btn from "./Btn";
//import "./Form.css";


export default class Input extends Component {

    constructor (props) {
        super(props);
        this.state = { 
            value: '' 
        };
    }

// var queryParams = {};

// searchParams = (value) => {
//     queryParams = {
//     searchSbjt: this.state.value,
//     startYr: this.state.value,
//     endYr: this.state.value,
//     }
// }

    // inputChangeHandler = (ev) => {
    //     this.setState({
    //         value: ev.target.value
    //     });
    //     console.log(ev.target.value)
    // }


    render() {

		return(
		    <div className="form-group">
                <label htmlFor={ this.props.id }>{ this.props.label }</label>
                <input
                    className="form-control"
                    type="text"
                    id={ this.props.id }
                    name={ this.props.id }
                    onChange={e => {this.props.inputChangeHandler(e.currentTarget.value, this.props.id)}}
                    value={ this.props.value }
                    placeholder={ this.props.placeholder }
                    required
                />
            </div>
		)
	}
}


{/*  

  //   if (!this.state.searchSbjt) {
  //     alert('Please enter a subject to search');
  //     return false
  //   } 

  //   else if  (!this.state.startYr) {
  //     alert('Please enter the start date for the search');
  //     return false
  //   }  
    
  //   else if (!this.state.endYr) {
  //     alert('Please enter the end date for the search');
  //     return false
  //   } 
    
  //   else if ((this.state.searchSbjt) && (this.state.startYr) && (this.state.endYr)) {
  //     alert('Lets search ' + this.state.searchSbjt + ' between ' + this.state.startYr + ' and ' + this.state.endYr);
  //     // clears all 3 input fields
  //     this.setState({
  //     searchSbjt: "",
  //     startYr: "",
  //     endYr: ""
  //   });
  // }

  */}