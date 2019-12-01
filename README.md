# Employee Feedback

## Component Details

This is a Server Rendered React app written in typescript that calls employee survey API and presents the results on the UI. When the server is started,
the API is called server side and data presented on UI.

## Running

### Install packages.

`npm install`

### Set up settings

#### Locally

No settings is needed


### Run the application:

`npm start`

## Tech Stack

- Typescript
- Jest for unit tests
- Typestyle for CSS
- React with Hooks
- Enzyme for unit tests

## CLI Commands

``` bash
# install dependencies
npm install

# start server
npm start

# run tests with jest
npm test
All the tests pass, however you will notice some warnings emanated. This is because of enzyme issue with react hooks listed here https://github.com/airbnb/enzyme/issues/2073 . The workarounds suggested can be explored but it does not work out of the box and need some investigation and time.
```

## Design
Server rendering was primarily chosen to have better user experience in slower networks and API. Since the server sends the actual HTML instead of js that browser has to download, the user can atleast view the page faster. Also wanted to optimise further using react lazy loading but unfortunately , it does not work server side. Issue Details - https://github.com/xing/hops/issues/714. Another optimization that could be done is code splitting but due to small size of the application, i left it for now. As application data is not huge, react hooks was chosen to manage state instead of introducing complexity of redux or other state management library. Typestyle was used for CSS since it brings typings and ease of coding and also supports server side styling. Axios is used to fetch data as it has older browser support and also fewer lines of code because of its response structure.

## Assumptions
Screenshots are provided. On the survey details page, i have listed only theme, question description, question number and average response rating instead of everything coming back from API. I left out id's and other minor fields as i did not feel it is important information to be displayed in the UI. On the survey summary screen, the name of the survey is displayed and it is a clickable hyperlink. Again did not display all the information coming from API to make UI simpler and easier to understand. The table in UI for survey details is scrollable and has fixed header
