const  express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const adminVerif = require('../middleware/adminAuth');

router.get('/', adminVerif, userCtrl.getAllUsers);
router.post('/', auth, userCtrl.createUser);
router.get('/:id', auth, userCtrl.getOneUser);
router.get('/:id/withEvents', auth, userCtrl.getOneUserWithEvents);
router.delete('/:id', auth, userCtrl.deleteUser);
router.put('/:id',  auth, userCtrl.updateUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/image', auth, userCtrl.getUrlImage);



export const UserRouter = router;
