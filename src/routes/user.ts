const  express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

router.get('/', auth, userCtrl.getAllUsers);
router.post('/', auth, userCtrl.createUser);
router.get('/:id', auth, userCtrl.getOneUser);
router.delete('/:id', auth, userCtrl.deleteUser);
router.put('/:id',  auth, userCtrl .updateUser);
//router.post('/auth/signin', userCtrl.signInUser);
//router.post('/auth/signup', userCtrl.createUser);
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);



export const UserRouter = router;









