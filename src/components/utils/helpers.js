// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios  from "axios";
import search from "./../children/Search"

// NYT API autorization key
var nytAuthKey = "8c93a771d5cf4414b9f1a3292e6970d8";

// Search Parameters
var searchSbj = props.searchSbjt;
var numResults = 5;
var startYr = props.startYr;
var endYr = props.endYr;

// Helper functions (in this case the only one is runQuery)
export default Helpers = {

  runQuery: function(searchSbj, startYr, endYr) {

    console.log(searchSbjt);

    // NYT api call for articles
    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + searchSbjt + "&facet_field=day_of_week&begin_date=" + startYr + "&end_date=" + endYr + "&api-key=" +
      nytAuthKey;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });
  }
};

// postArticle = (searchSbjt, date, url) => {
//   axios.post()
//  }
