const http = require("http");
const fs = require("fs");
const path = require("path");
// These "const" variables cannot be altered. Here we are setting up three strings.

const server = http.createServer((req,res) => {
    
    // Here, we are setting up "server", our server. 
    // req, request, and res, response.
    
    if (req.url === "/" || req.url === "./index.html") {
        // Here, if a "blank" call is made, i.e. to the homepage
        // we call "index.html"

        const filePath = path.join(__dirname, "./index.html");
        //We set up "filePath" as a path to the file "index.html" in the directory of the website
    
        fs.readFile(filePath, "utf8", (err, data) => {

            //Here we are reading the file (index.html), found at the file path, which was just set before
            // err and data are our callback objects. err is an error, it becomes true if there was an issue calling the file.
            // data contains the data of the file. 

            if (err) {
                res.statusCode = 500;
                res.end("Error reading the index.html file.");
                return;
            }

            // If an error occurs, "err" becomes true. if that happens we let the user know by responding with "Error reading the index.html file", rather than the data.

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);

            // If the file is read successfully, we respond with the data.
            // by setting the header we mark this file as containing 
        });
    }

    else if (req.url === "/styles.css") {
        const filePath = path.join(__dirname, "./styles.css");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err){
                res.statusCode = 500;
                res.end("Error reading CSS file.");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type","text/css")
            res.end(data)
        });
    }

    else if (req.url === "/script.js") {
        const filePath = path.join(__dirname, "./script.js");

        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end("Error reading the JS file.");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/javascript");
            res.end(data);
        });
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000.")
});