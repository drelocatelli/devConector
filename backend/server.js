const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

// connect db
connectDB();

// int middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[Server] started on port ${port}`);
});