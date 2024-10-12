const errorMiddleware =  (err, req, res, next) => {
 const status = err.status || 500;
 const message = err.message || 'Bankenwqfwd Error';
 const extraDetails = err.extraDetails;
return  res.status(status).json({ message,  extraDetails });


};

module.exports =  errorMiddleware;

 