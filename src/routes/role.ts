const  express = require('express');
const router = express.Router();

const roleCtrl = require('../controllers/role');

router.get('/', auth, roleCtrl.getAllRoles);
router.post('/', auth, roleCtrl.updateRole);
router.get('/:id',auth, roleCtrl.getOneRole);
router.delete('/:id',auth,roleCtrl.deleteRole);
router.put('/:id', auth, roleCtrl.updateRole);

export const RoleRouter = router;









