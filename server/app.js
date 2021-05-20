const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//cors settings
app.use(cors());


mongoose.connect('mongodb://localhost:27017/graphql', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
mongoose.connection.once('open',() => {
    console.log('Connected to Database')
})

app.use('/graphql', graphqlHTTP({
    schema : schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Server listens for request on port 4000');
})