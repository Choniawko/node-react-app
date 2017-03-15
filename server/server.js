// BASE SETUP
// =============================================================================

const express    = require('express');
const bodyParser = require('body-parser');
const app        = express();
const morgan     = require('morgan');


app.use(morgan('dev')); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port     = process.env.PORT || 8080;

const mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');


// ROUTES FOR OUR API
// =============================================================================

const router = express.Router();

const portionRouter = require('./routes/portion');

router.use((req, res, next) => {
	console.log('Something is happening.');
	next();
});

router.get('/', (req, res) => {
	res.json({ message: '`Server works!`' });	
});

app.get('/', (req, res) => {
    return res.send(`Server works!`);
})

app.use('/api', router);
app.use('/api/portion', portionRouter);

app.listen(port, () => {
    console.log(`Server listen on port : ${port}`)
});
