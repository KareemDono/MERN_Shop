//asyncHandler to handle async errors.
//async: an async function is a function that returns a promise
//Promise: a promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved.



const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
