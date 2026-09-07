const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    console.log("Request received:", req.url);

    if (req.url === "/") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Welcome to Smart Utility Toolkit");
    }

    else if (req.url === "/about") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("About Page");
    }

    else if (req.url === "/contact") {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Contact Page");
    }

    else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});