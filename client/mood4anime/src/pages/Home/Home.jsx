import React from 'react';
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import MoodButtons from '../../components/MoodButtons/MoodButtons';
import './Home.css'

function Home() {
    const navigate = useNavigate();

    const navToAnime = (mood) => {
        navigate(`/animes/${mood.toLowerCase()}`, { state : mood.toLowerCase() });
    }

    const mainContainer = {
        width: '60%',
        marginTop: '10rem',
    };

    return (
        <Container className='text-center' style={ mainContainer }>
            <h1 className='header'>Discover animes based on your mood</h1>
            <p className='subheader'>What's the mood today?</p>
            <MoodButtons navToAnime={navToAnime} />
            <p className='subheader'>Made By <em>Qayyum</em></p>
        </Container>
    );
}

export default Home;
