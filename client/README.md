React Boilerplate
===

This is a react boilerplate project, the idea with this is to clone it and start building your React application, you will have some pre-configured features that i think are really helpful when you start writing a react application, this will take care of all the webpack configuration and you can focus only on the important stuff for your business.

Needed software
---
For the node setup i recomend to have a node version manager [nvm](https://github.com/creationix/nvm) you can follow the installation instructions on it's page, if you have already nvm installed, you can execute `nvm use` in the directory where this repository was cloned and that's it (you must have the node version already installed `nvm install v9.2.0`).

Engine versions
---

 * node `v9.2.0`
 * npm `v5.5.1`

Tech stack
---

This is the list of packages used in this project and a minor description of the purpouse o each:

 * react `v16.2.0`: Not to much to say about it :).
 * react-router-dom `v16.2.0`: The binding for react to html web pages.
 * babel: Provide the developer the ability to write ES2015 javascript code.
 * prop-types: To declare the `propTypes` and `defaultProps` to react components.
 * classnames: Adds a nice helper for use html style classes and conditional classes.
 * react-favicon: Every web application needs a favicon.
 * react-helmet: Allows the developer to setup the title and another tags that goes in the html header per page.
 * react-hot-loader: This allows the developer to check changes in a quick way while he's developing the application.
 * react-redux: I think every fairly big project with react should have a storage solution, in this particular case redux, it is the most popular so there is a lot of documnetation on how to use it.

Setup
---

To do the initial setup of the project, first of all clone this repository and do the following steps:

 * Clone this repository into your local machine.
 * If you have nvm, make sure to have the node described version installed and execute `nvm use`, the .nvmrc file will describe which version to use.
 * Execute `cp .env.sample .env` this will create the .env file in the root directory of the project, you can use this file to specify variables inside the project, this example uses the `NAME` variable to specify the header title.
 * Install the dependencies executing `npm install`.
 * Now start the server using `npm run start:dev`.
 * Happy coding!
