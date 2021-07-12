const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
fs = require('fs')
const sourcesurl = 'https://torrends.to/torrent-tracker-list/';

got(sourcesurl).then(response => {
    console.log('statusCode:', response.statusCode);
    const dom = new JSDOM(response.body);
    const responsetext = dom.window.document.querySelector('pre').textContent;
    const savetext = responsetext.replace(/\n/g, '\n\n');
    fs.writeFile('torrent_tracker.txt', savetext, function (err) {
        if (err) return console.log(err);
        console.log('getting torrent tracker from torrends.to');
    });

}).catch(error => {
    console.log(error);
});
