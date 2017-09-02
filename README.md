# React-app-nyt-search

This is a New York Times Article Search application was created using the following technologies: MongoDB / Express / ReactJS / NodeJS (MERN-stack) application. Users can query, display, and save articles from the New York Times Article Search API. Additionally saved articles can be removed from the list.

Click on the indvidual headlines to be re-directed to the full New York Times articles.

##Functionality

###Backend
This app uses express to serve routes and mongoose to interact with a MongoDB database.

###Frontend
This app uses ReactJS for rendering view components, axios for the AJAX api calls, and some bootstrap for styling.

In order to transpile the JSX code, webpack and babel were utilized. All of the JSX code in the /app folder was transpiled into the bundle.js file located in the /public folder.

###Dependencies
 ```"axios": "^0.16.2",
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "react-scripts": "1.0.11"```

##Installation

To install the this application locally follow the instructions below:

With the command line:

1 git clone https://github.com/rspica/React-app-nyt-search.git
2 cd React-app-nyt-search
3 npm install
4 Run the React-app-nyt-search in development mode from the command line via `npm start` or `yarn start`
The React-app-nyt-search app will run locally, the default port is set to 3000.

You can now view nyt-react-search in the browser. The app webpage can be access via the url: `http://localhost:3000/`




If you wish to clone the app down to your local machine...

Ensure that you have MongoDB set up on your laptop
An amazing repo to get you started with that can be found here.
Once you are set up, cd into this repo and run npm install.
Then open another bash or terminal window and run mongod
Run the script with node server.js.
Navigate to localhost:3000 in your browser.
Note that if you made changes to the JSX code in the /app folder, you must transpile it to see your changes. When cd-ed into this repo, enter npm run bundle in the command line to trigger my webpack script.

The /test folder can be disregarded since its files were made just for laying out the design of the app.


