let CustomerModel = require('../models/customer.model');
let express = require('express');
let router = express.Router();

//Crea un cliente
//POST localhost:3000/customer
router.post('/customer', (req, res) => {
    //req.body
    if (!req.body)
        return res.status(400).send('Peticion esta faltando');

    let model = new CustomerModel(req.body);
    model.save()
        .then(doc => {
            if (!doc || doc.length === 0)
                return res.status(500).send(doc);
            res.status(201).send(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

//Obtiene un cliente
router.get('/customer', (req, res) => {

    if (!req.query.email)
        return res.status(400).send('Falta el parametro email en la URL');

    CustomerModel.findOne({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

//Actualiza un cliente
router.put('/customer', (req, res) => {

    if (!req.query.email)
        return res.status(400).send('Falta el parametro email en la URL');

    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

//Elimina un cliente
router.delete('/customer', (req, res) => {

    if (!req.query.email)
        return res.status(400).send('Falta el parametro email en la URL');

    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});


module.exports = router;