
const express = require('express');
const router = express.Router();

const komikController = require('../controllers/komikController');

// CREATE
router.post('/', komikController.createKomik);

// READ ALL
router.get('/', komikController.getAllKomik);

// READ ONE
router.get('/:id', komikController.getKomikById);

// UPDATE
router.put('/:id', komikController.updateKomik);

// DELETE
router.delete('/:id', komikController.deleteKomik);

module.exports = router;
