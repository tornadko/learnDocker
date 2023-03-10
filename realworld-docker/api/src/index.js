'use strict';
const config = require('./configuration');
const express = require("express")
const connectDB = require('./utils/db');
const User = require('./models/user');

const app = express()
const PORT = config.port;
const HOST = config.host;

app.use(express.json());

app.get("/test", (req, res) => {
	res.send("Server is working correctly")
})

// Connect to database
connectDB()
  .then(() => {
    // Start server
    app.listen(PORT, HOST, () => {
		  console.log(`API-service is working on port ${PORT}`)
	  })
  })
  .catch((error) => {
    console.log(error);
  });

// Add a user
// To add call: curl -X POST -H "Content-Type: application/json" -d '{"userName": "Alex K"}' http://localhost:80/users
app.post('/users', (req, res) => {
  const { userName } = req.body;

  const user = new User({ userName });

  user.save().then((user) => {
     res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Internal server error');
    });
});

// Get users
app.get('/users', (req, res) => {
  User.find().exec().then(users => {
    res.send(users);
  })
  .catch(err => {
      console.log(err);
      res.status(500).send('Internal server error');
  });
});