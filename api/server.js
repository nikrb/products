// FIXME: es6?
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var db;
var url = 'mongodb://localhost:27017/productsdb';
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

app.get('/api/product', function(req, res) {
  db.collection("product").find({}).toArray(function(err, docs) {
    if( err){
      console.error( "GET /api/product failed:", err);
      res.json( { error:err});
    } else {
      // console.log( "get/api/product results:", docs);
      res.json(docs);
    }
  });
});

app.get( '/api/category', function( req, res){
  db.collection( "category").find({}).toArray( function( err, docs){
    if( err){
      console.error( "GET /api/categories failed:", err);
      res.json( { error: err});
    } else {
      // console.log( "GET /api/categories results:", docs);
      res.json( docs);
    }
  });
});

app.post('/api/product', function(req, res) {
  // category, name, cost_total, weight_total, unit_total
  let new_product = {
    category: req.body.category,
    name: req.body.name,
    cost_total: req.body.cost_total,
    weight_total: req.body.weight_total,
    unit_total: req.body.unit_total,
    stocked: req.body.stocked
  };
  console.log( "creating new product:", new_product);
  db.collection("product").insertOne(new_product, function(err, result) {
    if( err){
      console.log( "POST /api/product failed:", err);
      res.json( { error: err});
    } else {
      const newId = result.insertedId;
      console.log( "new product id:", newId);
      res.json( { _id: newId,
                  category: new_product.category,
                  cost_total: new_product.cost_total,
                  stocked: new_product.stocked,
                  name: new_product.name,
                  unit_total: new_product.unit_total,
                  weight_total: new_product.weight_total
                });
    }
  });
});


app.listen(app.get('port'), function() {
  console.log('Server started: https://localhost:' + app.get('port') + '/');
});
