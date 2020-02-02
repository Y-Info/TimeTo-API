import {User} from '../models/User';
import {url} from "inspector";

exports.createUser= (req, res) => {
  const userObject = JSON.parse(req.body.user);
  const user = new User({
    ...userObject,
  });
  user.save()
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
exports.getUrlImage= (req, res) => {
  let url = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  if (url){
    res.status(200).json(url)
  }else{
    res.status(500).json({'error' : 'image non trouver'});
  }

};
