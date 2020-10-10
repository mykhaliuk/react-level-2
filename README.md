This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

A simple app that searches GitHub users by provided user login.

App fetches and displays in a list 15 _(limit is hardcoded but can be provided dynamically)_ users by provided input against GihHub API. Querying is debounced to make the requests no more than 1 time per 1000ms.

## To run project

In the project directory, you should run:

### `yarn && yarn start`

Installs all dependencies and runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## or

### `yarn && yarn build && NODE_ENV=production npx serve -s build`

Installs all dependencies and runs the app in the production mode _(to avoid double rendering)_ .<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
