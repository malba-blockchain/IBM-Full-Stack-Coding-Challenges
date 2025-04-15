const express = require('express');
const app = express();
const usersRouter = require('./routes/users');

// Middleware to parse JSON bodies
app.use(express.json());

// Use the users router
app.use('/users', usersRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 