const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).header('Access-Control-Allow-Origin', '*').send(
        {
            home_page: 'Bem Vindo!'
        }
    );
});

module.exports = router;