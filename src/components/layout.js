import React, { Component } from "react";


// include all of the sub-components
// import Helpers from "./utils/helpers";
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
  //   this.setState({ searchSbjt: subject });
  // },


// Sets up the Layout components and Export it back for use in app.js file
export default class Layout extends Component {


  render() {
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
              <Search setSubject={this.setSubject} />
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
