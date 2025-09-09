/* global use, db */
// MongoDB Playground

// Select the database to use.
use('WebDevDatabase');

// Insert a few documents into the Lecture94 collection.
db.getCollection('Lecture94').insertMany([
  {
    "Name": "Priya Sharma",
    "Citizenship": "Indian",
    "Age": "25"
  },
  {
    "Name": "Rohan Gupta",
    "Citizenship": "Indian",
    "Age": "32"
  },
  {
    "Name": "Anjali Verma",
    "Citizenship": "Indian",
    "Age": "19"
  },
  {
    "Name": "Vikram Singh",
    "Citizenship": "Indian",
    "Age": "45"
  },
  {
    "Name": "Sneha Patel",
    "Citizenship": "Indian",
    "Age": "28"
  },
  {
    "Name": "Aditya Kumar",
    "Citizenship": "Indian",
    "Age": "22"
  },
  {
    "Name": "Pooja Reddy",
    "Citizenship": "Indian",
    "Age": "30"
  },
  {
    "Name": "Arjun Mehta",
    "Citizenship": "Indian",
    "Age": "27"
  },
  {
    "Name": "Kavita Joshi",
    "Citizenship": "Indian",
    "Age": "38"
  },
  {
    "Name": "Sameer Khan",
    "Citizenship": "Indian",
    "Age": "24"
  }
]);

// Print a message to the output window.
console.log(`Done Inserting Data`);