require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./app/routes/user.route');



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database successfully....')
}).on('error', () => {
    console.log('Database connection failed.....')
});


const app = express();
app.use(express.json());
app.use('/users', usersRouter);



app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`)
});