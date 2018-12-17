# :hatching_chick: Handmade
Welcome to the Handmade !
This is a full stack web application using MongoDB, Express,React, Node.js and Webpack. It is also configured with webpack-dev-server,nodemon and babel.

- [Handmade](#:hatching_chick:-handmade)
  - [Introduction](#introduction)
    - [Development mode](#development-mode)
    - [Production mode](#production-mode)
  - [Quick Start](#:hatching_chick:-quick-start)
  - [Documentation](#documentation)
    - [Folder Structure](#folder-structure)
    - [Webpack](#webpack)
    - [Webpack dev server](#webpack-dev-server)
    - [Nodemon](#nodemon)
    - [Express](#express)
    - [Concurrently](#concurrently)
    - [Babel](#babel)
    - [SASS](#sass)
  - [Authors](#:tophat:-authors)

## Introduction
This is a simple full stack React application with a Node.js and Express backend. Client side code is written in React and the backend API is written using Express .

We have two running modes the Dev mode and the prod mode.
To launch the app we use one of the scripts configured in the package.json file .
```
npm run dev  //for the dev mode
npm run prod //for the prod mode
```
### Development mode
In the development mode, we will have 2 servers running. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server using nodemon which helps in automatically restarting the server whenever server side code changes.

### Production mode
In the production mode, we will have only 1 server running. All the client side code will be bundled into static files using webpack and it will be served by the Node.js/Express application.

## :arrow_forward: Quick Start
```
# Clone the repository
git clone https://github.com/YAHYAfz/Handmade.git

# Go inside the directory
cd handmade

# Install dependencies
npm install

# Start development server
npm run dev
```
## Documentation

### Folder Structure

All the source code will be inside src directory.
Inside src, there is client and server directory. All the frontend code (react, sass, js and any other assets) will be in client directory. Backend Node.js/Express code will be in the server directory.
Static files will be in the public directory.
 ```
  /
  ├── public/
  └── src/
      ├── client/
      └── server/
```
### Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
webpack.config.js file is used to describe the configurations required for webpack. Below is the webpack.config.js file which we are using.
```
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = 'dist';

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(outputDirectory),
    publicPath :'/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.sass$/,
            use: ["style-loader", "css-loader","sass-loader"]
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg|ico)$/,
            loader: "url-loader?limit=100000"
          }
    ]
  },
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon : "./public/images/favicon.ico",
    })
  ]
};
```
1. entry: Here the application starts executing and webpack starts bundling
2. output path and filename: the target directory and the filename for the bundled output
3. module loaders: Module loaders are transformations that are applied on the source code of a module. We pass all the js file through babel-loader to transform JSX to Javascript. SASS files are passed through sass-loaders,css-loaders and style-loaders to load and bundle CSS files. Fonts and images are loaded through url-loader.
4. Dev Server: Configurations for the webpack-dev-server which will be described in coming section.
5. plugins: clean-webpack-plugin is a webpack plugin to remove the build folder(s) before building. html-webpack-plugin simplifies creation of HTML files to serve your webpack bundles. It loads the template (public/index.html) and injects the output bundle.

### Webpack dev server

Webpack dev server is used along with webpack. It provides a development server that provides live reloading for the client side code. This should be used for development only.

The devServer section of webpack.config.js contains the configuration required to run webpack-dev-server which is given below.
```
devServer: {
  port: 8080,
  open: true,
  proxy: {
    '/api': 'http://localhost:3000'
  }
}
```
Port specifies the Webpack dev server to listen on this particular port (3000 in this case). When open is set to true, it will automatically open the home page on startup. Proxying URLs can be useful when we have a separate API backend development server and we want to send API requests on the same domain. In our case, we have a Node.js/Express backend where we want to send the API requests to.
Also it helps to solve CORS Issue,check issues part for more information.

### Nodemon
Nodemon is a utility that will monitor for any changes in the server source code and it automatically restart the server. This is used in development only.

nodemon.json file is used to describe the configurations for Nodemon. Below is the nodemon.json file which I am using.
```
  {
    "watch": ["src/server/"]
  }
```
Here, we tell nodemon to watch the files in the directory src/server where out server side code resides. Nodemon will restart the node server whenever a file under src/server directory is modified.
NB: if you have an internal watch failed when using nodemon try this command :echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

### Concurrently
Concurrently is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server concurrently in the development environment. Below are the npm script commands used.
```
  "server": "nodemon ./src/server/server.js",
  "client": "webpack-dev-server --mode development --devtool inline-source-map --history-api-fallback --hot",
  "dev": "concurrently \"npm run server\" \"npm run client\""
```
### Express
Express is a web application framework for Node.js. It is used to build our backend API's.It defines a routing table which used to perform different actions based on HTTP methode and Url.

### Babel
[Babel](https://babeljs.io) helps us to write code in the latest version of JavaScript. If an environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.

.babelrc file is used describe the configurations required for Babel. Below is the .babelrc file which I am using.
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
    "react-html-attrs"
  ]
}
```
Babel requires plugins to do the transformation. Presets are the set of plugins defined by Babel. Preset env allows to use babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 and it will transform them to ES5. Preset react allows us to use JSX syntax and it will transform JSX to Javascript.

### SASS
[Sass](https://sass-lang.com/) is used as CSS preprocessor.Writing CSS can become quite repetitive and little tasks such as having to look up hex color values, closing your tags, etc. can become time-consuming. And so that is where a preprocessor comes into play. A CSS preprocessor is basically a scripting language that extends CSS and then compiles it into regular CSS.

## :tophat: Authors
:woman_technologist: Fati YAHYA - [Github](https://github.com/YAHYAfz).

:man_technologist: Ridae Hamdani - [Github](https://github.com/ridaeh). :morocco: :fr:
