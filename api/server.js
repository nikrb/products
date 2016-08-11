var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var db;
var url = 'mongodb://localhost:27017/todosdb';
MongoClient.connect(url, function(err, dbc) {
  if( err){
    console.log( "mongo connect error:", err);
  }
  db = dbc;
});

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use('/', express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/todo', function(req, res) {
  db.collection("todos").find({}).toArray(function(err, docs) {
    if( err){
      console.error( "GET /api/todo failed:", err)
    } else {
      console.log( "get/api/todo results:", docs);
      res.json(docs);
    }
  });
});

app.post('/api/todo', function(req, res) {
  let newTodo = {
    text: req.body.text,
    complete: false
  };
  console.log( "creating new todo:", newTodo);
  db.collection("todos").insertOne(newTodo, function(err, result) {
    if( err){
      console.log( "POST /api/todo failed:", err);
    } else {
      const newId = result.insertedId;
      console.log( "new todo id:", newId);
      res.json( { _id: newId, text: newTodo.text, complete: newTodo.complete });
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: https://localhost:' + app.get('port') + '/');
});
