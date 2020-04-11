const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json({limit: '8mb'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.redirect('/api/buku'));
app.use('/api', require('./routes'));

app.listen(port, () => console.log(`server running on port ${port}!`));
