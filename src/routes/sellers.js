const  router = require('express-promise-router')();

const {
    index,
    newSeller,
    getSeller,
    replaceSeller,
    deleteSeller
} = require('../controllers/sellers');
router.get('/', index);
router.post('/', newSeller);

router.get('/:clientId', getSeller);
router.put('/:clientId', replaceSeller);
router.delete('/:clientId', deleteSeller);

module.exports = router;