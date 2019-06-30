let express = require('express');
let router = express.Router();

//consulta en la peticion del objeto
//localhost:3000/person?name=renato&age=30
router.get('/person', (req, res) => {
    if (req.query.name)
        res.send('Tu has pedido una persona: ' + req.query.name);
    else
        res.send('Tu has pedido una persona');
});

//parametros en la peticion del objeto
//localhost:3000/person/enato
router.get('/person/:name', (req, res) => {
    res.send('Tu has pedido una persona ' + req.params.name)
});

router.get('/error', (req, res) => {
    throw new Error('Este es un error forzado')
});


module.exports = router;