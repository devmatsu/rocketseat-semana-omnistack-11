const express = require('express');
const Validator = require('./app/middlewares/validator.js');

const OngController = require('./database/controllers/OngController.js');
const IncidentController = require('./database/controllers/IncidentController.js');
const ProfileController = require('./database/controllers/ProfileController.js');
const SessionController = require('./database/controllers/SessionController.js');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', Validator.checkOngStore(), OngController.store);

routes.get('/profile', Validator.checkHeader(), ProfileController.index);

routes.get('/incidents', Validator.checkPage(), IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', Validator.checkId(), IncidentController.delete);

module.exports = routes;