# C☣️Vjs-19

## 1 Project

The aim of this demo project was to develop a web application that graphically displays the development of the CoVid-19 pandemic in 2020ff. both internationally and at Gymnasium Liestal. This should be achieved using JavaScript/JSON and nodeJS.

## 2 npm/nodeJS

With NodeJS, it is possible to run JavaScript code server-side. NodeJS can therefore be used not only to run an application server-side but is also able to setup a server and to return data [1](https://webdeasy.de/das-ultimative-node-js-einsteiger-tutorial/#what-is-nodejs).

### 2.1 Installation

NodeJS is operated by using the command line interface (CLI). It can be installed
on the device by using an installer. Once installed, NodeJS is initialized by typing
`npm init`
into the console. The created program afterwards is locally (using localhost)
executed by typing
`node index.js`
.[1](https://webdeasy.de/das-ultimative-node-js-einsteiger-tutorial/#what-is-nodejs)

#### 2.1.1 npm express/configuration file

To display the web content to the user, the node module “express” is required. It
has to be included in the server configuration file (index.js). In the configuration
file, NodeJS has to be told what to do and where to find the required files and
paths. 1 The configuration file for COVjs-19 looks as follows:
![express file setup](https://github.com/y-neck/covjs-19/blob/44ae1bf45852cf7450c0959e36764dabc91972c9/public/Documentation/ref/npmExpress%20setup.png 'express setup')
