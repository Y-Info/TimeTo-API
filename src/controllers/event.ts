import {Event} from '../models/Event';

exports.createEvent = (req, res) => {
    const event = new Event({
        ...req.body
    });
    event.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json(error.message));
};

exports.deleteEvent =  (req, res) => {
    Event.deleteOne({_id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprime !'}))
        .catch(error => res.status(400).json(error.message ));
};

exports.updateEvent = (req,res) => {
    Event.updateOne({_id: req.params.id },
        { ...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Objet modifie !'}))
        .catch(error => res.status(400).json(error.message ));
};

exports.getOneEvent = (req, res)=>{
    Event.findOne({_id: req.params.id})
        .then(event => res.status(200).json(event))
        .catch(error => res.status(404).json(error.message));
};

exports.getAllEvents =  (req, res) => {
    Event.find()
        .then(events => res.status(200).json(events))
        .catch(error => res.status(400).json(error.message ));
};
