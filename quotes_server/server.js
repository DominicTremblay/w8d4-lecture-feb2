const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { client } = require('./db/client');
const dbHelpers = require('./helpers/dbHelpers')(client);
const quotesRoutes = require('./routes/quotesRoutes');

const port = process.env.PORT || 8000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

client.connect().then(result => console.log(`connected to db`));

app.use('/api/quotes', quotesRoutes(dbHelpers));

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
