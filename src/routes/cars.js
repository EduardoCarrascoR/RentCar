const router = require('express-promise-router')();

const {
    index,
    newClient
} = require('../controllers/clients');
router.get('/', index);
router.post('/', newCar);

module.exports = router;
