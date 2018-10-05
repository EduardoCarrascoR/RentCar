const router = require('express-promise-router')();

const {
    index,
    newClient,
    getClient,
    replaceClient,
    deleteClient,
    getClientsCars,
    newClientCar
} = require('../controllers/clients');
router.get('/', index);
router.post('/', newClient);

router.get('/:clientId', getClient);
router.put('/:clientId', replaceClient);
router.delete('/:clientId', deleteClient);

router.get('/:clientId/cars', getClientsCars);
router.post('/:clientId/cars', newClientCar);
module.exports = router;
