const express = require('express');
const schema = require('./schema/schema.js');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://atlas-sql-69155b23b14067138557252f-0vlhk5.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin');

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});