const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const url = 'mongodb://localhost:27017/mydb';

// Set up routes
app.get('/', (req, res) => {
  res.send('Hello World! Luis Andrés Olarte Zabala ...');
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

  console.log('Connected to MongoDB!');
  
  // Insert a new user document
  app.post('/users', (req, res) => {
    const user = { name: req.body.name, email: req.body.email, created_date: new Date() };
    db.collection('users').insertOne(user, (err, result) => {
      if (err) throw err;

      console.log(`Inserted user with ID: ${result.insertedId}`);
      res.send(`Inserted user with ID: ${result.insertedId}`);
    });
  });

  // Retrieve all user documents
  app.get('/users', (req, res) => {
    db.collection('users').find().toArray((err, result) => {
      if (err) throw err;

      res.send(result);
    });
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
