// generateToken file is used to generate a token for the user.
//a token is a string of characters that is used to authenticate a user.
//jwt stands for json web token. it is a standard used to create access tokens for an application.

//why do we need tokens?
//when a user logs in to an application, a token is generated and sent to the client.
//the client then stores the token locally (usually in local storage) and sends it along with every request to the server.
//the server then verifies the token and sends the response.
//this is how the server knows that the user is logged in.


import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  // Set JWT as an HTTP-Only cookie
  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
