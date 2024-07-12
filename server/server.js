require("dotenv").config();

const express = require('express')
const cors = require("cors");
const app = express();

const aniListRoute = require('./routes/aniListAPI')


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,PUSH,PUT,DELETE",
        credentials: true
    })
);


app.use("/animes", aniListRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Mood4Anime server listening on port ${port}`)
});
