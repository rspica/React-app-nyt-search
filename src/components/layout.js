import React, { Component } from "react";


// include all of the sub-components
//import helpers from "./utils/helpers";
import Search  from "./children/Search";
import Results from "./children/Results";
import Saved   from "./children/Saved";


// Sets up the Layout components and Export it back for use in app.js file
export default class Layout extends Component {
    constructor(props) {
    super(props);
    this.state = {
      searchSbjt: "",
      startYr: "",
      endYr: "",
      articles: []
    };

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

// handles the input values from user
  handleClick = () => {
    if (!this.state.searchSbjt) {
      alert('Please enter a subject to search');
      return false
    } 

    else if  (!this.state.startYr) {
      alert('Please enter the start date for the search');
      return false
    }  
    
    else if (!this.state.endYr) {
      alert('Please enter the end date for the search');
      return false
    } 
    
    else if ((this.state.searchSbjt) && (this.state.startYr) && (this.state.endYr)) {
        alert('Lets search ' + this.state.searchSbjt + ' between ' + this.state.startYr + ' and ' + this.state.endYr + '\n\n\n could not get the life cycles to work or the ajax call for the results!');


  // // The moment the page renders component did mount runs get the article -- add AJAX request in component did mount
  // componentDidMount: function() {
  //   // Get the latest article.
  //   helpers.getAistory().then(function(response) {
  //     console.log(response);
  //     if (response !== this.state.articles) {
  //       console.log("articles", response.data);
  //       this.setState({ articles: response.data });
  //     }
  //   }.bind(this));
  // },

  // If the component changes (i.e. if a search is entered)...
  // // this is a way to run code when someone changes the component ie an input field.
  // componentDidUpdate: function() {

  //   // Run the query with the search params
  //   helpers.runQuery(this.state.searchSbjt, this.state.startYr, this.state.endYr).then(function(data) {
  //     if (data !== this.state.results) {
  //       console.log("Article data: ", data);
  //       this.setState({ results: data });

  //       // After we've received the result... then post the search term to our Article.
  //       helpers.postArticle(this.state.searchTerm).then(function() {
  //         console.log("Updated!");

  //         // After we've done the post... then get the updated Article
  //         helpers.getArticle().then(function(response) {
  //           console.log("Current Article", response.data);

  //           console.log("Article", response.data);

  //           this.setState({ Article: response.data });

  //         }.bind(this));
  //       }.bind(this));
  //     }
  //   }.bind(this));
  // },

        // componentDidUpdate = (prevProps, prevState) => {
        //   if (prevState.searchSbjt !== this.state.searchSbjt) {  // new search subject ? then run new search.
        //     console.log("UPDATED");

        //     helpers.runQuery(this.state.searchSbjt, this.state.startYr, this.state.endYr).then(function(data) {
        //       if (data !== this.state.results) {
        //         console.log(data);
        //         this.setState({ results: data });
        //       }
        //     }.bind(this)); // binds "this" to setState to use this.setState
        //   }
        // },
        // setSubject = (subject)=> {
        //   this.inputChangeHandler({ searchSbjt: subject });
        // }
      }
    }

  render() {
    console.log("inputChangeHandler value: ", this.inputChangeHandler)

    console.log("line 55 layout looking at this.state: ", this.state)

    return (
      <div className="container">
        <div className="jumbotron jumbotron-image">
          <h1 className="text-center"><span class="glyphicons glyphicons-newspaper" aria-hidden="true"></span>New York Times Search</h1>
          <p className="text-center">
          <em>Search news articles of interest.</em>
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
            <Results Article={this.state.results} />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Saved saveArticles={this.state.saveResults} />
          </div>
        </div>

      </div>
    );
  }
};



