#!/usr/bin/mongo

var db = new Mongo().getDB("productsdb");

db.product.remove({});

db.product.insert([
  { "category" : "Food", "name" : "carrot", "cost_total" : "0.60",
    "weight_total" : 6, "unit_total" : 0 }
]);
db.category.remove({});
db.category.insert( [
  { title: "Food"},
  { title: "Sporting Goods"},
  { title: "Electronics"},
]);
