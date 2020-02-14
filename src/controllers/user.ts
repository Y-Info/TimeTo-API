import {User} from '../models/User';

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        ...req.body,
        password: hash
      });
      user.save()
      .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
      .catch(error => res.status(400).json(error.message));
    })
    .catch(error => res.status(500).json(error.message ));
}

exports.login = (req, res, next) =>{
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error : 'Utilisateur non trouvé !'});
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid){
            return res.status(401).json({ error : 'Mot de passe incorrect !'});
          }
          res.status(200).json({
            userId: user._id,
            name: user.name,
            avatar: user.avatar,
            token: jwt.sign(
              { userId: user._id},
              process.env.RANDOM_TOKEN_SECRET,
              { expiresIn: '24h'}
            )
          });
        })
        .catch(error => res.status(500).json(error.message))
    })
    .catch(error => res.status(500).json(error.message));
}

exports.createUser= (req, res) => {
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json(error.message));
};

exports.signInUser= (req, res) => {
  const user = new User({
    ...req.body
  });
  user.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json(error.message ));
};

exports.deleteUser =  (req, res) => {
  User.deleteOne({_id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprime !'}))
    .catch(error => res.status(400).json(error.message ));
};

exports.updateUser = (req,res) => {
  User.updateOne({_id: req.params.id },
    { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({message: 'Objet modifie !'}))
    .catch(error => res.status(400).json(error.message ));
};

exports.getOneUser = (req, res)=>{
  User.findOne({_id: req.params.id})
    .then(event => res.status(200).json(event))
    .catch(error => res.status(404).json(error.message));
};

exports.getOneUserWithEvents = (req, res)=>{
  User.findOne({_id: req.params.id})
    .populate({
        path:'postedEvent',
        select: ['title']
    }).exec()
    .then(event => res.status(200).json(event))
    .catch(error => res.status(404).json({error}));
};

exports.getAllUsers=  (req, res) => {
  User.find()
    .then(events => res.status(200).json(events))
    .catch(error => res.status(400).json(error.message ));
};
exports.getUrlImage= (req, res) => {
  let url = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
  if (url){
    res.status(200).json(url)
  }else{
    res.status(500).json({'error' : 'image non trouver'});
  }
};
