const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<http>
                <head><title>Assignment 1</title></head>
                <body>
                    <h1>Create User:</h1>
                    <br/>
                    <form action="/create-user" method="POST">
                        <input type="text" placeholder="Username" name="username"><button type="submit">Create User</button></input>
                    </form>

                </body>
            </http>`
                );
        res.end();
    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(
            `<http>
                <head><title>Assignment 1</title></head>
                <body>
                    <h2>List of users:</h2>
                    <ul>
                        <li>Bob Vance, Vance Refridgeration</li>
                        <li>Matthew Goodman</li>
                        <li>Random Name</li>
                    </ul>
                </body>
            </http>`
                );
        res.end();
    }

    if (url === '/create-user' && method === 'POST') {

        // Get Data From Form
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        return req.on('end', () => {

            // Output to Console Username Input
            console.log(Buffer.concat(body).toString().split('=')[1]);

            // Redirect back to '/'
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();            
        });
    }   
}


module.exports = {
    handler: requestHandler
};