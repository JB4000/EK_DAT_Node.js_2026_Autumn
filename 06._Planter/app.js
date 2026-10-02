import express from 'express';
const app = express();



const PORT = process.env.PORT;

const server = app.listen(undefined, (error) => {
    if (error) {
        console.log("Error starting the server", error);
        return;
    }
    console.log('Server is running on port', server.address().port);
});
