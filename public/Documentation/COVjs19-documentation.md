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

### 2.2 Asynchronous data transfer

NodeJS uses asynchronous data transfer. While normally the browser has to wait to execute the next request until the response of the previous one, asynchronous data transfer enables requests before the response to the previous one comes.
This enables requesting simultaneously. It therefore prevents code blocking.[2](https://codeforgeek.com/asynchronous-programming-in-node-js/)

## 3 Development
The COVjs-19 application consists of three pages, “Gymnasium Liestal”, “International” and “Schweiz”. The “Gymnasium Liestal” page shows the development of the corona virus at the
Gymnasium Liestal. This is achieved by using JavaScript and chartJS. The “International” page shows two charts from OurWorldinData.[3](https://ourworldindata.org/coronavirus) On the same page, chartJS is used to display the average stringency index of some countries of Europe.
“Schweiz” simply shows an iframe displaying the corona-data.ch web page and the current measurements in Switzerland.
### 3.1 chartJS [4](https://www.chartjs.org/docs/latest/),[5](https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs/44990697#44990697)
#### 3.1.1 Case/quarantine chart (Gymnasium Liestal)
ChartJS is a JavaScript framework to display an array as chart. The CDN has to be included in the head of the .html file in a script tag:
`src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js"`
The array data is to be drawn into an html canvas.
In the case data/quarantine data files, the chart data has to be defined as a JSON array:
