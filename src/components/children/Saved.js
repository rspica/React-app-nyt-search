import React, { Component } from "react";

export default class Saved extends Component {
	render() {

		return (
		<div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Saved Results</h3>
        </div>
        <div className="panel-body text-center">
          
          <p>{this.props.saved}</p>
        </div>
      </div>
		)

	}
}