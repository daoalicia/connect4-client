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

The web service supports CORS. The client is served at port 443 and port 80 redirects to port 443. A process manager (pm2) is used to keep the service running.

## Technical Soundness

The source code is readable with consistent style and formatting, along with meaningful variable names and occassional comments to describe our logic. There has been a steady flow of commits to Git within this past week.

## Known Errors

Clicking on any part of the board on the client side, will trigger the player turn to switch (won't drop a token though). This is why we specify clicking on a white cell to make a move in the instructions.

We really tried to get the web service / back-end working on HTTPS with the SSL certificate. However, we were unsuccessful in this despite retrying on both our droplets multiple times. Due to this, the secured front-end webpage will not retrieve the back-end's database queries due to a mismatch (HTTP vs HTTPS). Our app works perfectly on local though by running npm start in the connect4-client directory.
