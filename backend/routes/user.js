'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('../controllers').UserController;


const router = express.Router();
router.use(bodyParser.json());

router.post('/', async (req, res) => {
    try {
        const user = await UserController.addUser(req.body.lastname, req.body.firstname, req.body.email, req.body.pwd);
        return res.json(user).status(201).end();
    } catch(err) {
        res.status(400).end();
    }
});

router.get('/:id', async (req, res) => {
    try{
        const user = await UserController.getUser(req.params.id);
        return res.json(user).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.get('/', async (req, res) => {
    try{
        const user = await UserController.getAllUser();
        return res.json(user).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.put('/', async (req, res) => {
    try{
        const user = await UserController.updateUser(req.body.updates, req.body.id);
        return res.json(user).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const user = await UserController.removeUser(req.params.id);
        return res.json(user).status(200).end();
    } catch(err){
        console.log(err);
        res.status(409).end();
    }
});

module.exports = router;
