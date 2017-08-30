import React, { Component } from "react";

//import Helpers from "./utils/helpers";
import Input from "./components/Input";
import Btn   from "./components/Btn"



  // Here we describe this component's render method and export the component back for use in other files
export default class Search extends Component {
    constructor(props) {
    super(props);
    this.state = {
      searchSbjt: props.searchSbjt,
      startYr: props.startYr,
      endYr: props.endYr
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  inputChangeHandler = (value, key) => {
    this.setState({
      [key]: value
    });
      console.log(value, key)
    };



  render() {
    console.log("value: ", this.state.value)
    
    console.log(this.state)


    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Search Parameters</h3>
        </div>
        <div className="panel-body">
        
          <form>
            <div>
              <Input id={ "searchSbjt" } label={ "Subject:" } placeholder={ "Enter search topic for New York Times articles " } inputChangeHandler={this.inputChangeHandler.bind(this)}/>
            </div>
            <br />

            <div>
              <Input id={ "startYr" } label={ "Start Year:" } placeholder={ "Enter a search start date (from Sept 18, 1851)" } />
            </div>
            <br />
            
            <div>
              <Input id={ "endYr" } label={ "End Year:" } placeholder={ "Enter a search end date (to toady's date)" } />
            </div>
          </form>
          <br />

            <div className="panel-footer">
              <div className="text-right">
                <Btn onClick={this.handleSubmit} label={ "Find It" } btnIcon={ "glyphicons glyphicons-search"} />
                <Btn onClick={this.handleSubmit} label={ "Clear" }/>
              </div>
            </div>
        </div>
      </div>
    );
  }
}





