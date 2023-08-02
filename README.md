# CryptoNodes Cryptocurrency Tracker Web Application with Price Alerts and Email Notifications.
### Crypto Tracker

## [Deployement Link](https://cryptonodeclient.vercel.app/)

# Features
- Login and Signup.
- Few features are exclusive to the person who are signed up
- Eamil Price alert triggers for people to choose.
- push notificaiton
- Graphical representation and Data visualisation ranges from pre hours to 1 year.
- Encrypted password.

## TechStack
- React js
- NodeJs
- MongoDB
- Express
- nodemailer
- jwt
- bcrypt
- cookie-parser
- chart JS 2
- coingecko api
- dotenv
- node Crons

## Installation
CryptoNode requires [Node.js](https://nodejs.org/) v18+ to run.

There are two folders
- client as crypto-tracker-client 
- server as crypto-tracker-server

First of all clone the repository

### To start the client 
```sh
cd crypto-tracker-client
npm i
```
And wait till the client starts on your port http://localhost:3000

### To start the server
~~~ sh
cd crypto-tracker-server
npm i
```

### Now make a ".env" file in the directory of server with the following content
```sh
MONGO_USERNAME = priyamshankar2020
MONGO_PASSWORD = rutqHOBIOaljjJ3b
JWTTOKEN_KEY = klsajfhdsfieufhaosfpaweufhsldkjfhwei_jklfhs**fs
```
~~~sh
node index.js
```

The server will start after that.




