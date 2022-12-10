const userController = require('../../controller/authController')


module.exports = (router, app) => {
    router.post("/register", userController.registerUser);
    router.post("/login", app.oauth.grant(), userController.authUser);

    return router;
};