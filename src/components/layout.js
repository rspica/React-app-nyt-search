import React, { Component } from "react";


// include all of the sub-components
// import helpers from "./utils/helpers";
import Search  from "./children/Search";
import Results from "./children/Results";
import Saved   from "./children/Saved";


  // getInitialState = () => {
  //   return { searchSbjt: "", results: "" };
  // },

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.searchSbjt !== this.state.searchSbjt) {  // new search subject ? then run new search.
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchSbjt).then(function(data) {
  //       if (data !== this.state.results) {
  //         console.log(data);
  //         this.setState({ results: data });
  //       }
  //     }.bind(this)); // binds "this" to setState to use this.setState
  //   }
  // setSubject = (subject)=> {
  //   this.inputChangeHandler({ searchSbjt: subject });
  // },




// Sets up the Layout components and Export it back for use in app.js file
export default class Layout extends Component {
    constructor(props) {
    super(props);
    this.state = {
      searchSbjt: props.searchSbjt,
      startYr: props.startYr,
      endYr: props.endYr
    }
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  inputChangeHandler = (value, key) => {
    this.setState({
      [key]: value
    });
    console.log('value: ',value, 'key: ' ,key) 
    };

  handleSubmit = () => {
    console.log('this.state: ', this.state)
    };

// handles the clear button
  handleClick = () => {
        this.setState({ searchSbjt: "" });
  }


  render() {
    console.log("inputChangeHandler value: ", this.inputChangeHandler)

    console.log("line 55 layout looking at this.state: ", this.state)

    return (
      <div className="container">
        
        <div className="jumbotron">
          <h1><span className="glyphicons glyphicons-newspaper"></span></h1>
          <h1 className="text-center">New York Times Search</h1>
          <p className="text-center">
          <em>Search for and annotate articles of interest.</em>
          </p>
        </div>

        <div className="row">
            <div className="col-md-12">
              <Search 
              inputChangeHandler = { this.inputChangeHandler }
              handleClick = { this.handleClick }
              handleSubmit = { this.handleSubmit } 
              />
            </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Results />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Saved />
          </div>
        </div>




      </div>
    );
  }
};


{/*


        // <div className="col-md-6">

  //           <Search setSubject={this.setSubject} />

  //         </div>

  // <div className="col-md-6">

  //           <Results Article={this.state.results} />

  //         </div>
  //         <div className="col-md-6">

  //           <Saved Articles={this.state.results} />

  //         </div>

*/}
