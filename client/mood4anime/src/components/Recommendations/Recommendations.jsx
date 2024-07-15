import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';

import './Recommendations.css'


function Recommendations() {
    const location = useLocation();
    const { animes } = location.state || { movies: [] };

    const [cur, setCur] = useState(0)

    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    // TODO: These kinda breaks


    // if (cur == 0) {
    //     setPrevDisabled(true);
    // }
    // else {
    //     setPrevDisabled(false);
    // }

    const prev = () => {
        setCur(cur => cur - 1);
    };

    const next = () => {
        setCur(cur => cur + 1);
    };

    useEffect(() => {
        if (cur === 0) {
            setPrevDisabled(true);
        } else {
            setPrevDisabled(false);
        }

        if (cur === animes.length - 1) {
            setNextDisabled(true);
        } else {
            setNextDisabled(false);
        }
    }, [cur, animes]);

    const cardStyle = {
        width: '70%',
        margin: '0 auto 0 auto',
        backgroundColor: '#0c0c0c',
        borderColor: '#0a21c0',
        borderWidth: '4px',
    };

    const imageContainerStyle= {
        height: '22rem',
        width: '100%'
    }

    return (
        <Card className='py-4' style={ cardStyle }>
            <div style={ imageContainerStyle }>
                <img src={animes[cur].coverImage.large} alt={animes[cur].title.romaji} />
            </div>
            <h2 className='romajiTitle text'>{animes[cur].title.romaji}</h2>
            <p className='englishTitle text'>{animes[cur].title.english ? animes[cur].title.english : animes[cur].title.romaji}</p>
            <div className='md-2'>
                <Button variant='outline-primary' className='text' disabled={prevDisabled} onClick={prev}>Back</Button>
                <Button variant='outline-primary' className='text' disabled={nextDisabled} onClick={next}>Next</Button>
            </div>
        </Card>
    )

}

export default Recommendations;