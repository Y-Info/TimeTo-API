const  express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUsers);
router.post('/', multer, userCtrl.createUser);
router.get('/:id', userCtrl.getOneUser);
router.delete('/:id', userCtrl.deleteUser);
router.put('/:id',  userCtrl .updateUser);
router.post('/auth/signin', userCtrl.signInUser);
router.post('/auth/signup', userCtrl.createUser);

export const UserRouter = router;









