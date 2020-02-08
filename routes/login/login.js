const express = require("express");
const router_login = express.Router();

const { admin } = require('../../models');
const md5 = require('../../encrypt/md5');
const session_email = require('../../_session/session');

router_login.post('/logins', (req, res) => {
    admin.findOne(
        {
            where: {
                email: req.body.email
            }
        }
    ).then(
        adm => {
            if (adm.login === false && adm.senha === md5(req.body.senha)) {
                adm.update(
                    {
                        login: true,
                        updatedAt: new Date()
                    }
                ).then(
                    req.session.email = req.body.email,
                    req.session.login = req.body.login,
                    session_email.String = req.session.email,
                    res.status(200).header('Access-Control-Allow-Origin', '*').send(
                        {
                            logado: true
                        }
                    )
                )
            } else {
                res.status(404).header('Access-Control-Allow-Origin', '*').send(
                    {
                        logado: false
                    }
                )
            }
        }
    )
});

router_login.get('/logouts/:id', (req, res) => {
    admin.findByPk(req.params.id).then(
        adm => {
            if (adm !== null && adm.login === true) {
                adm.update(
                    {
                        login: false,
                        updatedAt: new Date()
                    }
                ).then(
                    session_email.String = '',
                    req.session.destroy(),
                    res.status(200).header('Access-Control-Allow-Origin', '*').send(
                        {
                            logado: false
                        }
                    )
                )
            } else {
                res.status(404).header('Access-Control-Allow-Origin', '*').send(
                    {
                        logado: true
                    }
                )
            }
        }
    );
});

module.exports = router_login;

