const errorMiddleware = (err, req, res, next) => {
    console.error(err);
  
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Algo deu errado.';
  
    return res.status(statusCode).json({
      error: {
        message
      }
    });
  };
  
  module.exports = errorMiddleware;