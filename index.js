const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log('Connected to MongoDB!');

  app.post('/users', function(req, res) {
    const user = { name: req.body.name, email: req.body.email };
    db.collection('users').insertOne(user, function(err, result) {
      if (err) throw err;
      console.log('User inserted');
      res.send('User inserted');
    });
  });
});

app.listen(3000, function() {
  console.log('Listening on port 3000');
});
