require("dotenv").config();

const express = require('express')
const app = express();

const aniListRoute = require('./routes/aniListAPI')

app.use("/animes", aniListRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Mood4Anime server listening on port ${port}`)
});
