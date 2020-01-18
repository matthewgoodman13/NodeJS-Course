const express = require('express');

const app = express();

//////////// PART TWO /////////////////////
// app.use((req, res, next) => {
//     console.log("Hello");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("World!");
//     res.send(`<h1>Hello World!</h1>`)
// });
///////////////////////////////////////////

// PART THREE
app.use('/users', (req, res, next) => {

    if (req.method === 'POST') {

        

        console.log();
        return res.send(
            `<h1>TEST!</h1>`
        )
    }

    console.log("./users being sent!");
    res.send(`<html>
    <head><title>Users Page</title></head>
    <body>
        <h1>Users:</h1>
        <ul>
            <li>Matthew</li>
            <li>Max</li>
            <li>Bob</li>
        </ul>
    </body>
</html>`)
});

app.use('/', (req, res, next) => {
    console.log('./ being sent!');
    res.send(
    `<html>
    <head><title>A2 Extended</title></head>
    <body>
        <h1>Input a User</h1>
        <form action="/users" method="post">
        <input type="text" name="user">
            <button type="submit">Submit</button>
        </input>
    </form>
    </body>
    </html>`
    );
});


app.listen(3000);