const { Router } = require('express');
const ApiClient = require('./Controllers/widget.controller');

const router = Router();

// gets all widget ids and names from the db to the front end to render later on select
router.get('/widgets', (req, res) => {});

//creates the widget in the db
router.post('/widget', (req, res) => {});

//gets the widget information about a specific widget (when user clicks on the list)
router.get('/widget/:id', (req, res) => {});

//removes the widget from the db
router.delete('/widget/:id', (req, res) => {});

module.exports = router;
