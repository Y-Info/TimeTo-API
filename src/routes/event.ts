const  express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');
const auth = require('../middleware/auth');

router.get('/', auth, eventCtrl.getAllEvents);
router.post('/', auth, eventCtrl.createEvent);
router.get('/:id', auth, eventCtrl.getOneEvent);
router.delete('/:id', auth, eventCtrl.deleteEvent);
router.put('/:id', auth, eventCtrl.updateEvent);

export const EventRouter = router;









