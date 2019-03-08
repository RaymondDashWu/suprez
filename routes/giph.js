const express = require('express');
const router = express.Router();
const Keyword = require('../models/keyword');

// GIPHY API - Gifs
router.post('/keywords', async (req, res) => {
    try {
        const keyword = await Keyword.create(req.body);
        res.json(keyword);
    } catch (err) {
        res.status(400).json({
            "error": err,
            "status": 400
        });
    }
})

module.exports = router;