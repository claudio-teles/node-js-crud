const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).send(
        {
            home_page: 'Bem Vindo!'
        }
    );
});

module.exports = router;