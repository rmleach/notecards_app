const express = require('express');
const knex = require('knex')(config);
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const environment = process.env.NODE_ENV || 'development';
const config = require('./knexfile')[environment];
// module.exports = db;

app.use(cors())

app.get('/', (req, res, next) => {
  knex('methods')
    .then((rows) => {
      res.send(rows)
    })
    .catch((err) =>{
      next(err)
    })
})

app.listen(port, function(){console.log(`humpin your mom on port ${port}`)})