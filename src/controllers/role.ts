import {Role} from '../models/Role';

exports.createRole = (req, res) => {
  const role = new Role({
    ...req.body
  });
  Role.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteRole =  (req, res) => {
  Role.deleteOne({_id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprime !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.updateRole = (req,res) => {
  Role.updateOne({_id: req.params.id },
    { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet modifie !'}))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneRole = (req, res)=>{
  Role.findOne({_id: req.params.id})
    .then(event => res.status(200).json(event))
    .catch(error => res.status(404).json({error}));
};

exports.getAllRole =  (req, res) => {
  Role.find()
    .then(events => res.status(200).json(events))
    .catch(error => res.status(400).json({ error }));
};
