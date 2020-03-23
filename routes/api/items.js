const express = require('express');
const router = express.Router();
const itemController = require('../../controllers/item_controller');

router.get('/',itemController.displayItems);
router.post('/create',itemController.create);
router.delete('/destroy/:id',itemController.destroy);

module.exports = router;