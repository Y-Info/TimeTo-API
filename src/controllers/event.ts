import {Event} from '../models/Event';
import {User} from '../models/User';

exports.createEvent = (req, res, next) => {
    const event = new Event({
        ...req.body
    });
    event.save()
        .then(
            User.updateOne({_id: req.body.postedBy},
                { $push: { postedEvent: event }})
                .then(() => res.status(201).json({ message: 'Evenement enregistré !'}))
                .catch(error => res.status(400).json(error.message))
        )
        .catch(error => res.status(400).json(error.message ));
};

exports.deleteEvent =  (req, res) => {
    Event.deleteOne({_id: req.params.id })
        .then(
            User.updateOne({_id: req.body.postedBy},
                { postedBy : null})
                .then(() => res.status(201).json({ message: 'Evenement supprimé !'}))
                .catch(error => res.status(400).json(error.message))
        )
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

exports.getOneEventWithCat = (req, res)=>{
    Event.findOne({_id: req.params.id})
        .populate({
            path: 'category',
            select: ['name']
        }).exec()
        .then(event => res.status(200).json(event))
        .catch(error => res.status(404).json({error}));
};

exports.getOneEventWithUser = (req, res)=>{
    Event.findOne({_id: req.params.id})
        .populate({
            path:'postedBy',
            select: ['name']
        }).exec()
        .then(event => res.status(200).json(event))
        .catch(error => res.status(404).json({error}));
};

exports.getAllEvents =  (req, res) => {
    Event.find()
        .then(events => res.status(200).json(events))
        .catch(error => res.status(400).json(error.message ));
};
