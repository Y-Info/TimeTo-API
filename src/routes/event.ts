const  express = require('express');
const router = express.Router();

const eventCtrl = require('../controllers/event');

router.get('/', eventCtrl.getAllEvents);
router.post('/', eventCtrl.createEvent);
router.get('/:id', eventCtrl.getOneEvent);
router.delete('/:id',eventCtrl.deleteEvent);
router.put('/:id', eventCtrl.updateEvent);

export const EventRouter = router;









