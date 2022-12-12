const authController = require('../../controller/authController')


module.exports = (router, app) => {
    router.post("/register", authController.registerUser);
    router.post("/login", app.oauth.grant(), authController.authUser);
    // router.post("/token", app.oauth.authorize(), authController.authUser);
    router.get("/token", authController.getAccessToken);

    return router;
};