import {Role} from '../models/Role';

exports.createRole = (req, res) => {
  const role = new Role({
    ...req.body
  });
  role.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json(error.message));
};

exports.deleteRole =  (req, res) => {
  Role.deleteOne({_id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprime !'}))
    .catch(error => res.status(400).json(error.message ));
};

exports.updateRole = (req,res) => {
  Role.updateOne({_id: req.params.id },
    { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet modifie !'}))
    .catch(error => res.status(400).json(error.message ));
};

exports.getOneRole = (req, res)=>{
  Role.findOne({_id: req.params.id})
    .then(role => res.status(200).json(role))
    .catch(error => res.status(404).json(error.message));
};

exports.getAllRole =  (req, res) => {
  Role.find()
    .then(roles => res.status(200).json(roles))
    .catch(error => res.status(400).json(error.message ));
};
