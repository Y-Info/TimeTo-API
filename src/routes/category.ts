const  express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');
const auth = require('../middleware/auth');

router.get('/', categoryCtrl.getAllCategories);
router.post('/', auth, categoryCtrl.createCategory);
router.get('/:id', categoryCtrl.getOneCategory);
router.delete('/:id', auth, categoryCtrl.deleteCategory);
router.put('/:id',  auth, categoryCtrl.updateCategory);

export const CategoryRouter = router;
