const  express = require('express');
const router = express.Router();

const roleCtrl = require('../controllers/role');
const auth = require('../middleware/auth');


router.get('/', roleCtrl.getAllRoles);
router.post('/', auth, roleCtrl.updateRole);
router.get('/:id', roleCtrl.getOneRole);
router.delete('/:id',auth,roleCtrl.deleteRole);
router.put('/:id', auth, roleCtrl.updateRole);

export const RoleRouter = router;









