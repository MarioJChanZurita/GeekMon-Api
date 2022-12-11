const PDFDocument = require('pdfkit');
const fs = require('fs')
const qr = require('qrcode');
const pokemonService = require('../utils/pokemonService')



const getPokemonFile = (req, res) => {

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

    const stream = res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename=${name}.pdf`
    })

    console.log('res', )
    setTimeout(()=>{
        doc.on('data', (chunk) => stream.write(chunk))
        doc.on('end', () => stream.end())
        
        doc.image(imgPath, {
            fit: [300, 300],
            align: 'center',
            valign: 'center'
        });
        doc
            .fontSize(30)
            .text(`${name}`, 100, 100);
        doc.end();

        fs.access(filePath, fs.F_OK, (err) => {
            if (err) {
                console.error(err)
                return
            }

            // res.set('Content-Type', 'application/pdf') 
            // res.set('x-content-type-options', 'nosniff')
            // res.contentType("application/pdf");
            // res.writeHead(200, {
            //     'Content-Type': 'application/pdf',
            //     'Content-Disposition': `attachment; filename=${name}.pdf`
            // })
            // res.sendFile(filePath, function (err) {
            //     if (err) {
            //         console.log(err)
            //     } else {
            //         console.log('Sent:', filePath);
            //     }
            // });


            // const file = fs.createReadStream(filePath);
            // const stat = fs.statSync(filePath);
            // res.setHeader('Content-Length', stat.size);
            // res.setHeader('Content-Type', 'application/pdf');
            // res.setHeader('Content-Disposition', `attachment; filename=${name}.pdf`);
            // console.log('res.headers', res)
            // file.pipe(res);

        })
    }, 2000)
}


const getPokemonQR = (req, res) => {
    const data = JSON.stringify(req.body)

    qr.toDataURL(data, function(err, url) {
        if(err) return console.log("error occurred")
        
        console.log(url)

        return res
            .status(200)
            .json({qr: url})
    })
}


module.exports = {
    getPokemonFile,
    getPokemonQR
}