# Employee Feedback

## Component Details

This is a Server Rendered React app written in typescript that calls employee survey API and presents the results on the UI. When the server is started,the API is called server side and data presented on UI.

## Running

### Install packages.

`npm install`

### Set up settings

#### Locally

Please note that there is a .env file checked in , that you need as well


### Run the application:

`npm start`

## Tech Stack

- Typescript
- React with Hooks
- React Router
- Jest for unit tests
- Typestyle for CSS
- Enzyme for unit tests
- Express

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
Server rendering was primarily chosen so that users can have better experience in slower networks and API. Since the server sends the actual HTML instead of js that browser has to download, the user can atleast view the page faster. Also wanted to optimise further using react lazy loading but unfortunately , it does not work server side. Issue Details - https://github.com/xing/hops/issues/714. Another optimization that could be done is code splitting but due to small size of the application, i left it for now. As application data is not huge, react hooks was chosen to manage state instead of introducing complexity of redux or other state management library. Typestyle was used for CSS since it brings typings and ease of coding and also supports server side styling. Axios is used to fetch data as it has older browser support and also fewer lines of code because of its response structure.

## Assumptions
Screenshots are provided. On the survey details page, i have listed only theme, question description, question number and average response rating instead of everything coming back from API. I left out id's and other minor fields as i did not feel it is important information to be displayed in the UI. On the survey summary screen, the name of the survey is displayed and it is a clickable hyperlink. Again did not display all the information coming from API to make UI simpler and easier to understand. The table in UI for survey details is scrollable but has fixed header so user knows what data they see on screen. Also mostly optimized it for mobile devices wherever possible.

## Screenshots
https://user-images.githubusercontent.com/11412050/69907926-7d855880-1433-11ea-8cac-154fa8156229.png

Mobile Device
https://user-images.githubusercontent.com/11412050/69907927-82e2a300-1433-11ea-825c-d30ff6283a61.png

https://user-images.githubusercontent.com/11412050/69907943-8a09b100-1433-11ea-9599-d0c0eebb6b53.png
