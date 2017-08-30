import React, { Component } from "react"


export default class Results extends Component {
    constructor(props) {
    super(props);
    this.state = {
      article: "some article",
    };
  }
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body text-center">
          <h1>Search Results populates here</h1>
          <p>{this.props.article}</p>
        </div>
      </div>
    );
  }
}
