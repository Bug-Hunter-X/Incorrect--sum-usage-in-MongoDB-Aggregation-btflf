```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {$match: { /* some filter */ }},
  {$group: {_id: "$field", sum: {$sum: "$anotherfield"}}}, //Error: cannot use string in $sum
  {$project: {_id: 0, sum: 1}}
])
```