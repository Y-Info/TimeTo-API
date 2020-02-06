const  express = require('express');
const router = express.Router();

const roleCtrl = require('../controllers/role');

router.get('/', roleCtrl.getAllRoles);
router.post('/', auth, roleCtrl.updateRole);
router.get('/:id', roleCtrl.getOneRole);
router.delete('/:id',auth,roleCtrl.deleteRole);
router.put('/:id', auth, roleCtrl.updateRole);

export const RoleRouter = router;









