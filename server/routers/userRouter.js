var userRouter = require('express').Router();
var userController = require('../controllers/userController.js');
var privateController = require('../controllers/privateController.js');

// Declare all routes for users and specify what controller method we're going to use for each

// the path '/api/users' is already prepended to all routes based on app.use statement in server.js
userRouter.route('/signup').post(userController.signupUser);

// this should prevent the next step if the user is not authenticated
userRouter.route('/signin').post(userController.signinUser, privateController.isAuthenticated);

userRouter.route('/signout').get(userController.signoutUser);

module.exports = userRouter;
