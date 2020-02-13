import {Category} from '../models/Category';

exports.createCategory = (req, res) => {
    const category = new Category({
        ...req.body
    });
    category.save()
        .then(() => res.status(201).json({ message: 'Category enregistré !'}))
        .catch(error => res.status(400).json({ message:error.message }));
};

exports.deleteCategory =  (req, res) => {
    Category.deleteOne({_id: req.params.id })
        .then(() => res.status(200).json({ message: 'Category supprime !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.updateCategory = (req,res) => {
    Category.updateOne({_id: req.params.id },
        { ...req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Category modifie !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneCategory = (req, res)=>{
    Category.findOne({_id: req.params.id})
        .then(category => res.status(200).json(category))
        .catch(error => res.status(404).json({error}));
};

exports.getAllCategories =  (req, res) => {
    Category.find()
        .then(categories => res.status(200).json(categories))
        .catch(error => res.status(400).json({ error }));
};
