const  express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-middleware');

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.get('/', auth, userCtrl.getAllUsers);
router.post('/', auth, userCtrl.createUser);
router.get('/:id', auth, userCtrl.getOneUser);
router.get('/populate/events/:id', auth, userCtrl.getOneUserWithEvents);
router.delete('/:id', auth, userCtrl.deleteUser);
router.put('/:id',  auth, userCtrl.updateUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/image', auth, multer, userCtrl.getUrlImage);



export const UserRouter = router;
