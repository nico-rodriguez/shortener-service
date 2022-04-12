const express = require('express');
const connectDB = require('./config/db.js');

const app = express();
const PORT = 5000;

// Connect to database
connectDB();
app.use(express.json());

app.use('/', require('./routes/index.js'));
app.use('/api/url', require('./routes/url.js'));

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}!`));
