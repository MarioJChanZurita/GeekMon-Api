const PDFDocument = require('pdfkit');
const fs = require('fs')
const qr = require('qrcode');
const pokemonService = require('../utils/pokemonService')



const getPokemonFile = (req, res) => {
    /* 
      #swagger.tags = ['Pokemon']
      #swagger.description = 'Endpoint para descargar en pdf un pokemon'
    */
    console.log(req.body)

    const { name, image } = req.body

    const filePath = `${__dirname}/__temp__/${name}.pdf`

    // Create a document
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(filePath));
    doc.image(`${__dirname}/assets/geekmon_icon.png`,{
        fit: [300, 300],
        align: 'center',
        valign: 'center',
        x: 100, 
        y: 100
    })

    // Adding an image in the pdf.
    const imgPath = `${__dirname}/__temp__/pokemon.png`
    pokemonService.downloadImageFromURL(image, imgPath)


    setTimeout(()=>{
        
        doc.image(imgPath, {
            fit: [300, 300],
            align: 'center',
            valign: 'center'
        });
        doc
            .fontSize(30)
            .text(`${name}`, 100, 100);
        doc.end();

    }, 2000)

    res.download(filePath, (err) => {
        if (err) {
            console.log(err)
          } else {
            return 
          }
    })
    /* #swagger.responses[200] = { 
               schema: { pdf: 'file' },
               description: 'PDF de un pokemon en especifico' 
        } */

}


const getPokemonQR = (req, res) => {
    /* 
    #swagger.tags = ['Pokemon']
    #swagger.description = 'Endpoint para generar qr de pokemon'
    */
    const data = JSON.stringify(req.body)

    qr.toDataURL(data, function(err, url) {
        if(err) return console.log("error occurred")
        
        console.log(url)

        return res
            .status(200)
            .json({qr: url})
    })
    /* #swagger.responses[201] = { 
               schema: { qr: 'string' },
               description: 'String de qr para ver un pokemon' 
        } */
}


module.exports = {
    getPokemonFile,
    getPokemonQR
}