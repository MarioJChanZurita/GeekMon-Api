const pokemonController = require('../../controller/pokemonController')

module.exports = (router, app) => {
    router.route('/download')
        .post(pokemonController.getPokemonFile)

    router.route('/qr')
        .post(pokemonController.getPokemonQR)

    return router
}