const express = require('express');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');


router.post('/',  notesCtrl.create);
router.post('/', notesCtrl.show);
router.get('/', notesCtrl.index);

module.exports = router;