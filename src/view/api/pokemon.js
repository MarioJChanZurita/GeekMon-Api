const pokemonController = require('../../controller/pokemonController')
const { authorize } = require('../../middleware/authMiddleware') 


module.exports = (router) => {
    router.route('/download')
        .post(authorize, pokemonController.getPokemonFile)

    router.route('/qr')
        .post(authorize, pokemonController.getPokemonQR)

    return router
}