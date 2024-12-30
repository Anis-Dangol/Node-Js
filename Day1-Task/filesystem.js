var http = require('http')
var fs = require('fs')

// Read the content from other file
// /*
http.createServer(function(req, res){
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        console.log('read completed!!');
        if (err) throw err;
        return res.end();
    });
}).listen(8080);


// */
// add the content in end of the other file 
// if the files doesn't eist, the file will be created.

/*
fs.appendFile('index.txt', 'hello content!', function(err){
    if (err) throw err;
    console.log('Append file Saved!');
});
*/

// Create a new, empty file
/*
fs.open('index.txt','w', function(err, file){
    if (err) throw err;
    console.log ('File Opened!!');
});
*/

// text is written in the new file or directed file 
/*
fs.writeFile('index1.txt', 'hello content!', function (err){
    if (err) throw err;
    console.log('Saved writing!');
});
*/

// Deletes the specified file
/*
fs.unlink('index.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!!');
});
*/

// Rename the specified files
/*
fs.rename('index.txt', 'newindex.txt', function(err){
    if (err) throw err;
    console.log('File Renamed!!');
});
*/


