import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';
import config from './config.json';

const app = express();

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

// api routes
app.use('/api', api({}))

app.listen(process.env.PORT || 3000, () => 
    console.log(`Example app listening`)
)