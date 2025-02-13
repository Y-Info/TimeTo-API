// @ts-ignore
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
    const userRole = decodedToken.userRole;
      if(userRole === 'admin'){
        next();
      }else {
        res.status(401).json('Unauthorized access')
      }
  } catch (error){
    res.status(401).json(error.message)
  }
};
