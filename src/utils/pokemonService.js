const http = require('http')
const https = require('https');
const Stream = require('stream').Transform;
const fs = require('fs')



// Download Image Helper Function
const downloadImageFromURL = (url, filename) => {

    let client = http;
    if (url.toString().indexOf("https") === 0) {
        client = https;
    }

    client.request(url, function (response) {
        const data = new Stream();

        response.on('data', function (chunk) {
            data.push(chunk);
        });

        response.on('end', function () {
            fs.writeFileSync(filename, data.read());
        });
    }).end();
};


module.exports = {
    downloadImageFromURL
}