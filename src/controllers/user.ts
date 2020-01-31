import {User} from '../models/User';

exports.createUser= (req, res) => {
  const event = new User({
    ...req.body
  });
  event.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.signInUser= (req, res) => {
  const event = new User({
    ...req.body
  });
  event.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser =  (req, res) => {
  User.deleteOne({_id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprime !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.updateUser = (req,res) => {
  User.updateOne({_id: req.params.id },
    { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet modifie !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneUser = (req, res)=>{
  User.findOne({_id: req.params.id})
    .then(event => res.status(200).json(event))
    .catch(error => res.status(404).json({error}));
};

exports.getAllUsers=  (req, res) => {
  User.find()
    .then(events => res.status(200).json(events))
    .catch(error => res.status(400).json({ error }));
};
