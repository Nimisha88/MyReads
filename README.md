# React Bookshelf App: My Reads

My Reads is a bookshelf app that allows user to select and categorize books user has read, are currently reading, or wants to read. The project emphasizes using React to build the application and using API to persist information as user interacts with the application.

## Project Preview

## Software, Firmware and Hardware:
* HTML, CSS, JavaScript
* React - Hook and Router
* [Create React App](https://github.com/facebook/create-react-app)

## Installation

Download/clone the project. `cd` to the project directory, then run:

### `npm install`

Installs the project dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload automatically when you make changes.

## Folder Structure

* main
  * README.md - Read me file
  * .gitignore - Files that were ignored in commit
  * package.json - Contains list of installable dependencies needed to run the application locally
  * src/index.js - Creating root and rendering App component
  * src/assets - Contains image files
  * src/components - Contains React Components
  * src/styles - Contains style sheets
  * src/utils - Contains API file
  * public/index.html - HTML file

## Copyright

The application is designed and developed by Nimisha Viraj as a part of [Udacity React Nanodegree](https://www.udacity.com/)

## Acknowledgements

* [Udacity](https://udacity.com) - Source of application requirements
* [Unsplash](https://unsplash.com/) - For Hero Image
* [FontAwesome](https://fontawesome.com/) - Source of Icons
* [GoogleFonts](https://fonts.google.com/) - Source of fonts
* [Stackoverflow](https://stackoverflow.com/) - Source of resolutions to coding errors and roadblocks

## Limitation and Scope

* Application filters outs any search result which are missing either one or more of the following details:
  * Title
  * Author
  * Thumbnail
* Application can be expanded to implement drag and drop feature to change book's shelf
