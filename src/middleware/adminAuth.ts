const jwtt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwtt.verify(token, process.env.RANDOM_TOKEN_SECRET);
    const userAdmin = decodedToken.userAdmin;
      if(userAdmin === 'admin'){
        next();
      }else {
        res.status(401).json('Unauthorized access')
      }
  } catch (error){
    res.status(401).json(error.message)
  }
};
