const express    = require('express');
const Portion = require('../models/portion');
const router = express.Router();

router.post('/new', (req, res) => {
    const portion = new Portion(req.body);
    console.log({portion});
    portion.save((err) => {
        if (err) throw err;

        res.json({
            success: true,
            message: "Portion save."
        })
    });
});

router.get('/', (req, res) => {
    const portions = Portion.find({}, (err, portions) => {
        if (err) {
            res.json({
                success: false,
                err
            })
        }
        console.log(portions);
        res.json({
            success: true,
            portions
        });
    });
});



module.exports = router;

