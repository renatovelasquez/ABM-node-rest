let express = require('express');
let app = express();
let personRoute = require('./routes/person');
let customerRoute = require('./routes/customer');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    // console.log(new Date().toString() + ' => ' + req.originalUrl);
    next()
});

app.use(personRoute);
app.use(customerRoute);
app.use(express.static('public'));

//Manejador para 404 recurso no encontrado
app.use((req, res, next) => {
    res.status(404).send('Creo que estas perdido');
});
//Manejador para Error 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'))
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info('El servidor a iniciado en ' + PORT));