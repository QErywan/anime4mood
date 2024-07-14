require("dotenv").config();

const express = require('express')
const cors = require("cors");
const app = express();

const aniListRoute = require('./routes/aniListAPI')


app.use(
    cors({
        origin: `${CLIENT_URL}`,
        methods: "GET,PUSH,PUT,DELETE",
        credentials: true
    })
);


app.use("/animes", aniListRoute);

app.use('/' , (req, res) => {
    res.send("Server running")
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Mood4Anime server listening on port ${port}`)
});
