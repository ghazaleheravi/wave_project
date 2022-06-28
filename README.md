## Project Description

A Javascript single-page app, **invoicing system**, where users can *manage* their *customers' information*. This piece of the application will be using a RESTful API to supply the data and show a compact list of customers. You can edit the inforamtion and log those to console.


## Built With
  
  - React.js(used Create React App)  

## Running locally 

To run the website locally you will need the following pre-installed:
  
  - ![Node >= 14.0.0 and npm >= 5.6](https://nodejs.org/en/)

Once you have the above installed, run the following command to Run:

  npm start

The above will startup a local http server and also complete an initial build of the source. Once complete, it will open the landing page in your browser. It will also watch your files for changes, and automatically rebuild the source on save.

## Production

When you’re ready to deploy to production, run: 
  
  npm run build 
  
will create an optimized build of your app in the build folder.

---

I wanted to find a way that would enable the app to scale as needed based on business objectives and expansion. One solution is to adjust the code everytime that the service expands to a new country but that requires manual work and some labor on code. With my approach no adjustments to the code is needed, you only need to add a **new name of country** and **provinces** to the list/JS module. I'm particularly proud of this because while the former solution requires a minor adjustment to the code, my approach eliminates that entirely and makes the app more scalable.  


