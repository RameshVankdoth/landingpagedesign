const express = require('express');
const router = express.Router();
const paneController = require('../controller/controller');

// GET all panes
router.get('/', paneController.getPanes);

// PUT update pane priority
router.put('/:id', paneController.updatePanePriority);

module.exports = router;
