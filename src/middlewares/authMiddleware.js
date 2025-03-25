const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (token) {
      return next();
    } else {
      return res.status(401).json({ message: 'Não Autorizado' });
    }
  };
  
  module.exports = authMiddleware;