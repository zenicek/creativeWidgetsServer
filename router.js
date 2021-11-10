const { Router } = require('express');
const ApiClient = require('./Controllers/widget.controller');

const router = Router();

//creates the widget in the db
router.post('/widget', (req, res) => {});

//gets the widget information about a specific widget
router.get('/widget/:id', (req, res) => {});

// gets all widgets from the db to the front end
router.get('/widgets', (req, res) => {});

//removes the widge from the db
router.delete('/widget/:id', (req, res) => {});

module.exports = router;
