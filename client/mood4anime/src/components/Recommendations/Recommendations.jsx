import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Recommendations() {
    const location = useLocation();
    const { animes } = location.state || { movies: [] };

    const [cur, setCur] = useState(0)

    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const next = () => {
        setCur(cur + 1);
        if (cur >= 5 && nextDisabled === false) {
            setNextDisabled(true);
        }

        if (cur > 1 && prevDisabled === true) {
            setPrevDisabled(false);
        }
    }

    const prev = () => {
        setCur(cur - 1);
        if (cur >= 5 && nextDisabled === false) {
            setNextDisabled(true);
        }

        if (cur > 1 && prevDisabled === true) {
            setPrevDisabled(false);
        }
    }

    return (
        <div className='Recommendations'>
            <div className='anime'><h1>Anime Recommendation</h1>
                <img src={animes[cur].coverImage.large} />
                <p>English Title: {animes[cur].title.english}</p>
                <p>Japanese Title: {animes[cur].title.romaji}</p>
                <p>Description: {animes[cur].description}</p>
            </div>
            <div className='navButtons'>
                <button disabled={prevDisabled} onClick={prev}>Back</button>
                <button disabled={nextDisabled} onClick={next}>Next</button>
            </div>
            

        </div>
    )

}

export default Recommendations;