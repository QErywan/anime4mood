const router = require('express').Router();
const axios = require('axios');

async function getAnime(mood) {
    let targetGenres = ''
    switch (mood) {
        case 'happy':
            targetGenres = "Comedy"
            break;
        default:
            targetGenres = "Drama"

    }
    console.log(targetGenres);
    const query = `
        query ($page: Int, $perPage: Int, $genre: String) {
            Page(page: $page, perPage: $perPage) {
                pageInfo {
                    total
                    perPage
                }
            media(genre: $genre, type: ANIME, status: FINISHED) {
                id
                title {
                    english
                    native
                }
                coverImage {
                    medium
                }
                description
                genres
            }
        }
    }
    `;

    let variables = {
        genre: targetGenres,
        page: 1,
        perPage: 5,
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

  return response
}

router.get(`/happy`, async (req, res) => {
    const response = await getAnime("happy");
    res.send(response.data.data.Page.media)
});
// TODO: add more moods
router.get(`/sad`, async (req, res) => {
    const response = getAnime("sad");
    console.log(response);
    response.then(function(result) {
        console.log(result.data.data.Page.media);
    })
});



module.exports = router;