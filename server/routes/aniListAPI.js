const router = require('express').Router();
const axios = require('axios');

function randomChoice(min, max) {
    console.log(Math.ceil(Math.random() * (max - min)) + min - 1);
    return Math.ceil(Math.random() * (max - min)) + min - 1;;
};


// TODO: make it more random
async function getAnime(mood) {
    let targetGenres = ''
    switch (mood) {
        case 'happy':
            targetGenres = "Comedy";
            break;
        case 'sad':
            targetGenres = "Drama";
            break;
        case 'excited':
            targetGenres = "Adventure";
            break;
        case 'loved':
            targetGenres = "Romance";
            break;
        case 'curious':
            targetGenres = "Mystery";
            break;
        case 'scared':
            targetGenres = "Horror";
            break;
        case 'relaxed':
            targetGenres = "Slice of Life";
            break;
        case 'inspired':
            targetGenres = "Sports";
            break;
        default:
            targetGenres = "Mahou Shoujo";

    }


    let randomYear = randomChoice(2000, 2024);

    const query = `
        query ($page: Int, $perPage: Int, $genre: String) {
            Page(page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    perPage
                }
            media(genre: $genre, type: ANIME, status: FINISHED, seasonYear: ${randomYear}) {
                id
                title {
                    english
                    romaji
                }
                coverImage {
                    large
                }
                description
                genres
            }
        }
    }
    `;

    console.log(query);

    let variables = {
        genre: targetGenres,
        page: 1,
        perPage: 10,
    };

    const response = await axios.post(
    process.env.ANILIST_API_URL,
    {
        query,
        variables
    },
    {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    }
  )
//   console.log(response.data.data.Page.media);
    return response
}

router.get(`/happy`, async (req, res) => {
    const response = await getAnime("happy");
    res.send(response.data.data.Page.media)
});

router.get(`/sad`, async (req, res) => {
    const response = await getAnime("sad");
    res.send(response.data.data.Page.media)
});

router.get(`/loved`, async (req, res) => {
    const response = await getAnime("loved");
    res.send(response.data.data.Page.media)
});

router.get(`/curious`, async (req, res) => {
    const response = await getAnime("curious");
    res.send(response.data.data.Page.media)
});

router.get(`/scared`, async (req, res) => {
    const response = await getAnime("scared");
    res.send(response.data.data.Page.media)
});

router.get(`/excited`, async (req, res) => {
    const response = await getAnime("excited");
    res.send(response.data.data.Page.media)
});

router.get(`/relaxed`, async (req, res) => {
    const response = await getAnime("relaxed");
    res.send(response.data.data.Page.media)
});

router.get(`/inspired`, async (req, res) => {
    const response = await getAnime("inspired");
    res.send(response.data.data.Page.media)
});



module.exports = router;