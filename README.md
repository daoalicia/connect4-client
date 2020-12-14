# About our React App

Collaborators: Alicia Dao and Susie Nguyen

For CS 347's Project 2, we decided to recreate the classic game, Connect 4 using React, Redux, Express, and a database. The database has one table that represents the Connect 4 "board". Each row in the table represents a cell on the board.

Other Info: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Play

When you go to our client webpage, you'll be greeted with a "start game" page. There will be two game modes to choose from: single player or multi player. In single player mode, you'll be playing against yourself. If you select multi player mode, you'll be asked to input both players' names. In this mode, you'll be playing on the same computer and switching off. To make a move, please click on a white circle in the column you want to drop your token into.

## User Experience

The purpose of this app is to play a Connect 4 game. There are descriptions of each mode and instructions above the board to inform the user on what to select or what to do. 

The layout is clean and consistent with a strong central alignment. We chose colors that compliment the classic Connect 4 colors and fonts that are easy for users to read while still conforming to a game-like aesthetic.

The app is easy to navigate with buttons to end a game or start a new one. We also made the start game button disabled until a mode is selected to avoid any user confusion. 

## Front-End

The global data is appropiately managed with Redux. Any component-specific data is managed through states. Data that is owned by a parent and is shared with chidren arrives through props. The interface is cleanly decomposed into components. Hooks are used to selectively update the UI. Actions are used to update the Redux store. States are changed in immutable ways only through the use of useState setters. The DOM changes dynamically as the user interacts with the app, such as when a user makes their move.

## Back-End

Our app has a back-end data store and web service. The database has a clean schema and contains only one table called board. Every element in the schema is used in the app. The endpoint is named meaningfully. The HTTP methods reflect their operations. Parameters are used for identifiers and the receiving of simple data. We provide an Express-based web service for interacting with the database. 

## Networking

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
