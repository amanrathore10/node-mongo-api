function errorHandler (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // send the error as JSON
 
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
    
  };

  module.exports = errorHandler;