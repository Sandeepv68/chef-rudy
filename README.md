<p align="center">
<img src="https://i.ibb.co/SQGt77F/logo.png" alt="drawing" width="400"/>
</p>

A simple mobile app to help in cooking, built using [React Native](https://reactnative.dev/). This app can help you search millions of recipes from around the world from its database. This app  can also help you do nutritional analysis on your favourite recipes or its ingredients. 

## :slightly_smiling_face: Motivation
This is my first journey into the world of building mobile apps. I have always been a javascript engineer for the web since the start of my career. I've always loved javascript. Technologies like [NodeJS](https://nodejs.org/en/), [ExpressJS](https://expressjs.com/), [ReactJS](https://reactjs.org/), and [MarkoJS](https://markojs.com/) have piqued my interest in JS world. Similarly [React Native](https://reactnative.dev/) caught my eye, way back, but I couldn't get my hands-on it. However, I decided to make my time and learn it by building an app for myself. I chose [Edamam](https://www.edamam.com/) API to serve as the back-end for this app. Edamam provides nutrition solutions to businesses in the food, health and wellness sectors, leveraging its proprietary cloud-based, structured-data semantic technology platform. 

## :notebook_with_decorative_cover: Table of Contents

<!--ts-->
* [About](#chef-rudy)
* [Motivation](#motivation)
* [Sample Screens](#sample-screens)
* [Installation](#installation)
* [Dependency](#dependency)
* [Backend API Server](#backend-api)
* [Design & Architecture](#design-&-srchitecture)
* [App Features](#app-features)
* [Future Scope](#future-scope)
* [Testing](#testing)
* [Technologies Used](#technologies-used)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgements](#acknowledgements)
<!--te-->
<p align="center"> </p>

## :iphone: Sample Screens

<style>
.md-table{
    border: none;
}
.md-table tbody tr, .md-table tbody tr td {
    border: none
}
</style>
<table class="md-table">
    <tbody>
        <tr>
            <td><img src="https://i.ibb.co/6PdHn3f/chef-rudy-1-splash.png" height="500" /></td>
            <td><img src="https://i.ibb.co/SPTL6GL/chef-rudy-2-home.png" height="500" /></td>
        </tr>
        <tr>
            <td>
                <p align="center"><i>Splash screen</i></p>
            </td>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
        </tr>
    </tbody>
</table>

## :floppy_disk: Installation
Clone the repo from the url and install the dependencies
```sh
git clone https://github.com/SandeepVattapparambil/chef-rudy.git
cd chef-rudy
npm i && npm install
```

## :package: Dependency
Chef Rudy app is dependent on the following packages:
* **@react-native-community/masked-view** [v0.1.10](https://www.npmjs.com/package/@react-native-community/masked-view) **:**
React Native MaskedView for iOS and Android. React Native MaskedView is not currently supported by Expo unless you "eject".

* **@react-navigation/native** [v5.2.3](https://www.npmjs.com/package/@react-navigation/native) **:**
React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. 

* **@react-navigation/stack** [v5.2.18](https://www.npmjs.com/package/@react-navigation/stack) **:**
Stack navigator for React Navigation.

* **axios** [v0.19.2](https://www.npmjs.com/package/axios) **:**
Promise based HTTP client for the browser and node.js

* **expo** [v37.0.3](https://www.npmjs.com/package/expo) **:**
The expo package is an umbrella package that contains the client-side code (ex: JavaScript) for accessing system functionality such as contacts, camera, and location in Expo apps. Some of the Expo APIs are implemented in this package, while others are implemented in universal modules under the parent packages directory.

* **expo-updates** [v0.1.0](https://www.npmjs.com/package/expo-updates) **:**
expo-updates fetches and manages updates to your app stored on a remote server.

* **react** [v16.9.0](https://www.npmjs.com/package/react) **:**
React is a JavaScript library for creating user interfaces.The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

* **react-dom** [v16.9.0](https://www.npmjs.com/package/react-dom) **:**
This package serves as the entry point to the DOM and server renderers for React. It is intended to be paired with the generic React package, which is shipped as react to npm.

* **react-native** [v0.61.5](https://www.npmjs.com/package/react-native) **:**
React Native brings React's declarative UI framework to iOS and Android. With React Native, you use native UI controls and have full access to the native platform.React Native apps may target iOS 9.0 and Android 4.1 (API 16) or newer. You may use Windows, macOS, or Linux as your development operating system, though building and running iOS apps is limited to macOS. Tools like Expo can be used to work around this.

* **react-native-gesture-handler** [v1.6.1](https://www.npmjs.com/package/react-native-gesture-handler) **:**
React Native Gesture Handler provides native-driven gesture management APIs for building best possible touch-based experiences in React Native. With this library gestures are no longer controlled by the JS responder system, but instead are recognized and tracked in the UI thread. It makes touch interactions and gesture tracking not only smooth, but also dependable and deterministic.

* **react-native-reanimated** [v1.7.1](https://www.npmjs.com/package/react-native-reanimated) **:**
React Native Reanimated provides a more comprehensive, low level abstraction for the Animated library API to be built on top of and hence allow for much greater flexibility especially when it comes to gesture based interactions.

* **react-native-safe-area-context** [v0.7.3](https://www.npmjs.com/package/react-native-safe-area-context) **:**
A flexible way to handle safe area, also works on Android and Web!

* **react-native-screens** [v2.2.0](https://www.npmjs.com/package/react-native-screens) **:**
This project aims to expose native navigation container components to React Native. It is not designed to be used as a standalone library but rather as a dependency of a full-featured navigation library.

* **react-native-svg-charts** [v5.4.0](https://www.npmjs.com/package/react-native-svg-charts) **:**
react-native-svg-charts provides SVG Charts support to React Native on iOS and Android, and a compatibility layer for the web.

* **react-native-svg-transformer** [v0.14.3](https://www.npmjs.com/package/react-native-svg-transformer) **:**
React Native SVG transformer allows you to import SVG files in your React Native project the same way that you would in a Web application when using a library like SVGR to transform your imported SVG images into React components. This makes it possible to use the same code for React Native and Web.

* **react-native-unimodules** [v0.9.0](https://www.npmjs.com/package/react-native-unimodules) **:**
This library contains the core unimodule infrastructure and a collection of unimodules and interfaces that are commonly depended on by other unimodules. You only need to install react-native-unimodules once and then you will be able to use most of the packages from the Expo SDK, like expo-camera, expo-media-library and many more, in any React Native project.

* **react-native-web** [v0.11.7](https://www.npmjs.com/package/react-native-web) **:**
React Native for Web brings the platform-agnostic Components and APIs of React Native to the Web. It is used in production by Twitter Lite.

* **react-redux** [v7.2.0](https://www.npmjs.com/package/react-redux) **:**
React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

* **redux** [v4.0.5](https://www.npmjs.com/package/redux) **:**
Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

* **redux-thunk** [v2.3.0](https://www.npmjs.com/package/redux-thunk) **:**
Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

* **rn-placeholder** [v3.0.0](https://www.npmjs.com/package/rn-placeholder) **:**
Display some placeholder stuff before rendering your text or media content in React Native. Compatible with Expo and react-native-web.

also the following packages are required for development: 
* **@babel/core** [v7.8.6](https://www.npmjs.com/package/@babel/core) **:**
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. 

* **babel-jest** [v25.2.6](https://www.npmjs.com/package/babel-jest) **:**
Jest plugin for babel. A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

* **jest** [v5.2.6](https://www.npmjs.com/package/jest) **:**
A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

* **react-test-renderer** [v16.9.0](https://www.npmjs.com/package/react-test-renderer) **:**
This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment. Essentially, this package makes it easy to grab a snapshot of the "DOM tree" rendered by a React DOM or React Native component without using a browser or jsdom.

* **@types/react** [v16.9.23](https://www.npmjs.com/package/@types/react) **:**
This package contains type definitions for React.

* **@types/react-native** [v0.61.17](https://www.npmjs.com/package/@types/react-native) **:**
This package contains type definitions for react-native.

* **babel-preset-expo** [v8.1.0](https://www.npmjs.com/package/babel-preset-expo) **:**
This preset extends the default React Native preset (metro-react-native-babel-preset) and adds support for decorators, tree-shaking web packages, and loading font icons with optional native dependencies if they're installed.

* **typescript** [v3.8.3](https://www.npmjs.com/package/typescript) **:**
TypeScript is a language for application-scale JavaScript. TypeScript adds optional types to JavaScript that support tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript.

## Backend API Server
This project uses [Edamam](https://www.edamam.com/) API to serve as the back-end for this app. Edamam provides nutrition solutions to businesses in the food, health and wellness sectors, leveraging its proprietary cloud-based, structured-data semantic technology platform. Inorder to consume the api, users are instructed to signup from their web portal available [here](https://developer.edamam.com/). Edamam has various subscription plans available for all types of users. Each api requires discrete app id and app key. These keys has to be saved inside the `keys.json` file inside the `src` folder in the app repo as shown in the image below.
<p><img src="https://i.ibb.co/PgRs4Nd/keys.png" height=400></p>

## Design & Architecture
Once the git repo is cloned, and api keys are set, you are good to go. You can modify the code to best suit your needs. The following is the folder tree structure for the `src` folder. The source of the app is written in `Typescript`.
```sh
└───src
    ├───Components
    │   ├───Button
    │   ├───GridPlaceHolder
    │   ├───ListPlaceHolder
    │   └───ListPlaceHolderGraph
    ├───Config
    ├───Network
    ├───Redux
    │   ├───Actions
    │   ├───Constants
    │   ├───Reducers
    │   └───Store
    └───Screens
        ├───AnalyzeMeal
        ├───Home
        ├───RecipeSearch
        └───ShowRecipe
```
The main entry point to the app is `index.js`, which registers the root component `App` from `App.tsx`. App loads all the screens and sets up the navigation using stack. Data required for each screen is obtained from `redux` store, which gets it from the api using `thunk` and `axios`. The architecture of this app follows standard redux-flux architecture as shown below: 
<p align="center">
<img src="https://cdn.scotch.io/scotchy-uploads/2014/10/V70cSEC.png"></p>

## App Features
Once the app loads, it renders the home screen as shown below:

Users have two options to choose from:
* **Recipe Search**
This feature allows users to search millions of recipes from around the world , and gets it comple details, including nutritional details, images etc.
* **Analyze Meal**
This feature allows users to analyze any recipe or uts ingredients to get a complete consolidated nutritional data with charts and graphs.

### **Recipe Search**
<table class="md-table">
    <tbody>
        <tr>
            <td><img src="https://i.ibb.co/SPTL6GL/chef-rudy-2-home.png" height="500" /></td>
            <td><img src="https://i.ibb.co/RgMJhwS/chef-rudy-3-search.png" height="500" /></td>
            <td><img src="https://i.ibb.co/xFJYXXV/chef-rudy-4-search-loading.png" height="500" /></td>
        </tr>
        <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
             <td>
                <p align="center"><i>Recipe search loading</i></p>
            </td>
        </tr>
         <tr>
            <td><img src="https://i.ibb.co/YW6bYhn/chef-rudy-5-list.png" height="500" /></td>
            <td><img src="https://i.ibb.co/RCBBNBG/chef-rudy-7-grid-loading.png" height="500" /></td>
            <td><img src="https://i.ibb.co/MR8YrP6/chef-rudy-6-grid.png" height="500" /></td>
        </tr>
         <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
             <td>
                <p align="center"><i>Recipe search loading</i></p>
            </td>
        </tr>
         <tr>
            <td><img src="https://i.ibb.co/8YLT2kS/chef-rudy-8-show-1.png" height="500" /></td>
            <td><img src="https://i.ibb.co/G9DLqDx/chef-rudy-9-show-2.png" height="500" /></td>
            <td><img src="https://i.ibb.co/thVx41m/chef-rudy-010-show-3.png" height="500" /></td>
        </tr>
         <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
             <td>
                <p align="center"><i>Recipe search loading</i></p>
            </td>
        </tr>
        <tr>
            <td><img src="https://i.ibb.co/TYT2y6m/chef-rudy-011-show-4.png" height="500" /></td>
            <td><img src="https://i.ibb.co/RHT4QmF/chef-rudy-012-grid-1.png" height="500" /></td>
            <td><img src="https://i.ibb.co/djHZ9Wq/chef-rudy-013-show-2.png" height="500" /></td>
        </tr>
         <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
             <td>
                <p align="center"><i>Recipe search loading</i></p>
            </td>
        </tr>
    </tbody>
</table>


### **Analyze Meal**

<table class="md-table">
    <tbody>
        <tr>
            <td><img src="https://i.ibb.co/SPTL6GL/chef-rudy-2-home.png" height="500" /></td>
            <td><img src="https://i.ibb.co/tsYpK0F/chef-rudy-014-analysis-1.png" height="500" /></td>
            <td><img src="https://i.ibb.co/gtd5MTZ/chef-rudy-015-analysis-2.png" height="500" /></td>
        </tr>
        <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
             <td>
                <p align="center"><i>Recipe search loading</i></p>
            </td>
        </tr>
         <tr>
            <td><img src="https://i.ibb.co/7CRQ297/chef-rudy-016-analysis-3.png" height="500" /></td>
            <td><img src="https://i.ibb.co/Hd7VLyb/chef-rudy-017-analysis-4.png" height="500" /></td>
        </tr>
        <tr>
            <td>
                <p align="center"><i>Home screen</i></p>
            </td>
            <td>
                <p align="center"><i>Recipe search screen</i></p>
            </td>
        </tr>
    </tbody>
<table>    