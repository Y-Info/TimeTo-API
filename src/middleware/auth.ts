const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        const userId = decodedToken.userId;
        const userRole = decodedToken.userRole;
        if (req.body.userId && req.body.userId !== userId || req.params.id !== userId) {
            if(userRole === 'admin'){
                next();
            }else{
                res.status(401).json('User ID non valable !');
            }
        } else {
            next();
        }
    } catch (error){
        res.status(401).json(error.message)
    }
};
