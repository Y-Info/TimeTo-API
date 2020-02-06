import env from 'dotenv';
env.config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
import {EventRouter} from './routes/event';
import {CategoryRouter} from './routes/category';
import {UserRouter} from './routes/user';
import {RoleRouter} from "./routes/role";

mongoose.connect(process.env.DB_URI,
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/event', EventRouter);
app.use('/api/category', CategoryRouter);
app.use('/api/user',UserRouter);
app.use('/api/role',RoleRouter);

module.exports = app;
