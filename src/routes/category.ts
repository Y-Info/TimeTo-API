const  express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/event');

router.get('/', categoryCtrl.getAllCategories);
router.post('/',categoryCtrl.createCategory);
router.get('/:id', categoryCtrl.getOneCategory);
router.delete('/:id',categoryCtrl.deleteCategory);
router.put('/:id', categoryCtrl.updateCategory);

export const CategoryRouter = router;