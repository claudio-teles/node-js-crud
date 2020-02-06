const express = require("express");
const router_user = express.Router();

const { user } = require('../../models');
const session_email = require('../../_session/session');

router_user.post('/users', (req, res)=>{
    req.session.email = session_email.email;
    console.log('Session: '+session_email.email+'.');
    if (req.session.email !== '') {
        user.create(
            {
                nome: req.body.nome,
                email: req.body.email,
                telefone: req.body.telefone,
                local_foto: req.body.local_foto,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ).then(
            usuario_cadastrado => {
                if (usuario_cadastrado !== null) {
                    res.status(201).send(
                        {
                            cadastrado: true
                        }
                    )
                } else {
                    res.status(204).send(
                        {
                            cadastrado: false
                        }
                    )
                }
            }
        )
    }
});

router_user.get('/users/:id', (req, res)=>{
    req.session.email = session_email.email;
    console.log('Session: '+session_email.email+'.');
    if (req.session.email !== '') {
        user.findByPk(req.params.id).then(
            usuario => {
                if (usuario !== null) {
                    res.status(200).send(usuario);
                } else {
                    res.status(404).send(
                        {
                            usuario_encontrado: false
                        }
                    )
                }
            }
        )
    }
});

router_user.get('/users', (req, res)=>{
    req.session.email = session_email.email;
    console.log('Session: '+session_email.email+'.');
    if (req.session.email !== '') {
        user.findAll({
            attributes: ['id' ,'nome', 'email', 'telefone', 'local_foto', 'createdAt', 'updatedAt']
        }).then(
            usuarios => {
                if (usuarios !== null) {
                    res.status(200).send(usuarios);
                } else {
                    res.status(404).send(
                        {
                            usuarios_encontrados: false
                        }
                    )
                }
            }
        )
    }
});

router_user.put('/users/:id', (req, res)=>{
    req.session.email = session_email.email;
    console.log('Session: '+session_email.email+'.');
    if (req.session.email !== '') {
        user.findByPk(req.params.id).then(
            usuario => {
                var dados_atualizado = {
                    nome: '',
                    email: '',
                    telefone: '',
                    local_foto: '',
                    updatedAt: '',
                    usuario_atualizado: false
                }
                if (req.body.nome !== null) {
                    usuario.update({nome: req.body.nome})
                    dados_atualizado.nome = usuario.nome;
                    dados_atualizado.usuario_atualizado = true;
                }
                if (req.body.email !== null) {
                    usuario.update({email: req.body.email})
                    dados_atualizado.email = usuario.email;
                    dados_atualizado.usuario_atualizado = true;
                }
                if (req.body.telefone !== null) {
                    usuario.update({telefone: req.body.telefone})
                    dados_atualizado.telefone = usuario.telefone;
                    dados_atualizado.usuario_atualizado = true;
                }
                if (req.body.local_foto !== null) {
                    usuario.update({local_foto: req.body.local_foto})
                    dados_atualizado.local_foto = usuario.local_foto;
                    dados_atualizado.usuario_atualizado = true;
                }
                if (req.body.updatedAt !== null) {
                    usuario.update({updatedAt: req.body.updatedAt})
                    dados_atualizado.updatedAt = usuario.updatedAt;
                    dados_atualizado.usuario_atualizado = true;
                }
                if (
                    dados_atualizado.nome !== '' || dados_atualizado.email !== '' ||
                    dados_atualizado.telefone !== '' || dados_atualizado.local_foto !== '' ||
                    dados_atualizado.updatedAt !== ''
                ) {
                    res.status(200).send(dados_atualizado)
                } else {
                    dados_atualizado.usuario_atualizado = false;
                    res.status(204).send(dados_atualizado)
                }
            }
        )
    }
});

router_user.delete('/users/:id', (req, res)=>{
    req.session.email = session_email.email;
    console.log('Session: '+session_email.email+'.');
    if (req.session.email !== null) {
        user.findByPk(req.params.id).then(
            usuario => {
                if (usuario !== '') {
                    usuario.destroy();
                    res.status(200).send(
                        {
                            usuario_deletado: true
                        }
                    )
                } else {
                    res.status(404).send(
                        {
                            usuario_deletado: true
                        }
                    )
                }
            }
        )
    }
});

module.exports = router_user;