import React, { Component } from "react";

//import Helpers from "./utils/helpers";
import Input  from "./components/Input";
import Btn    from "./components/Btn"
import layout from "./../layout"


  // Here we describe this component's render method and export the component back for use in other files
export default class Search extends Component {


  render() {

    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search Parameters</h3>
        </div>
        <div className="panel-body">
        
          <form onSubmit= { this.props.handleSubmit }>
            <div>
              <Input 
                id={ "searchSbjt" } 
                label={ "Subject:" } 
                placeholder={ "Enter search topic for New York Times articles " } 
                inputChangeHandler={ this.props.inputChangeHandler } 
                />
            </div>
            <br />

            <div>
              <Input 
                id={ "startYr" } 
                label={ "Start Year:" } 
                placeholder={ "Enter a search start date (from Sept 18, 1851)" }
                inputChangeHandler={ this.props.inputChangeHandler } 
                />
            </div>
            <br />
            
            <div>
              <Input 
                id={ "endYr" } 
                label={ "End Year:" } 
                placeholder={ "Enter a search end date (to toady's date)" } 
                inputChangeHandler={ this.props.inputChangeHandler }
                />
            </div>
          </form>
          <br />

            <div className="panel-footer">
              <div className="text-right">
                <Btn 
                  handleSubmit = { this.props.handleSubmit }
                  handleClick = { this.props.handleClick }
                  type    = { "submit" } 
                  label   = { "Find It" } 

                />
                <Btn 
                handleClick = { this.props.handleClick }
                handleSubmit = { this.props.handleSubmit }
                label   = { "Clear" }
                type    = { "button" }/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}





