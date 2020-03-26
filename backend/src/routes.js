const express = require('express');

const OngController = require('./database/controllers/OngController.js');
const IncidentController = require('./database/controllers/IncidentController.js');
const ProfileController = require('./database/controllers/ProfileController.js');
const SessionController = require('./database/controllers/SessionController.js');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;