import express from 'express';
const app = express();

app.use(express.static('public'));

// short-circuit operator
// console.log(undefined || 0 || "" || 8080 || true);
// console.log(false && 8080 && null);

// nullish coalescence 
// console.log("" ?? 8080);

const PORT = process.env.PORT ?? 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log('Server is running on port', server.address().port);
});
