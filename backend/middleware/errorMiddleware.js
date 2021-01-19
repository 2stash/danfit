const notFound = (req,res,next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}


// For the workouts which have a custom string ID, this will fire off with any length of string. for mongo _ids, this will fire off differently and only fire off notFound is the _id is the correct length

const errorHandler = (err,req,res,next)=> {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  console.log('hi')
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

module.exports = {notFound, errorHandler}