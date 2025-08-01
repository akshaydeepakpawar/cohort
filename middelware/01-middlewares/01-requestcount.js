const express = require('express');

const app = express();
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

//this code increment the count by +3 becoz of crome like
// browser auto send the request for the fevicon and other etc reasons like postman and IDE

app.use((req,res,next)=>{ 
    requestCount += 1;
  next();
})

//alternative code
// const methodsToCount = ['GET', 'POST', 'PUT', 'DELETE'];

// app.use((req, res, next) => {
//   if (methodsToCount.includes(req.method) && req.path !== '/favicon.ico') {
//     requestCount += 1;
//   }
//   next();
// });

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(3000); 

module.exports = app;