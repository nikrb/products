#!/usr/bin/mongo

var db = new Mongo().getDB("commentsdb");

db.comments.remove({});

db.comments.insert([
    {
        "author": "Pete Hunt",
        "text": "Hey there!"
    },
    {
        "author": "Paul O’Shannessy",
        "text": "React is *great*!"
    }
]);
