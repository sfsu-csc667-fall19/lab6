const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const app = express();
const port = 4000;



// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test101';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Connected successfully to server");
  const db = client.db(dbName);

  app.get('/list', (req, res) => {
    db.collection('notes')
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
      })
      .catch((e) => {
        res.send('Error');
      });
  });

  app.get('/updateall', (req, res) => {
    const updater = {
      $set: {
        tag: req.query.tag || 'demo tag',
      }
    };
    db.collection('notes')
      .updateMany({}, updater)
      .then((docs) => {
        res.send('Update ok');
      })
      .catch((e) => {
        res.send('Error');
      });
  });

  app.get('/update', (req, res) => {
    // /update?hello=brian&value=batman
    const updater = {
      $set: {
        notes: req.query.notes || '',
      }
    };
    db.collection('notes')
      // update vs findOneAndUpdate
      .findOneAndUpdate({
        _id: ObjectID.createFromHexString(req.query._id),
      }, updater)
      .then(() => {
        res.send('Update Ok');
      })
      .catch((e) => {
        res.send('Error');
      });
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});