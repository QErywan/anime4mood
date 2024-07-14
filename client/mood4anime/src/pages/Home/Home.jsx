import React from 'react';
import { useNavigate } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import MoodButtons from '../../components/MoodButtons/MoodButtons';
import './Home.css'

function Home() {
    const navigate = useNavigate();

    const fetchAnimes = async (mood) => {
        console.log(mood.toLowerCase());
        const response = await fetch(`${process.env.SERVER_URL}/animes/${mood.toLowerCase()}`)
        const data = await response.json();
        navigate(`/animes/${mood.toLowerCase()}`, { state : { animes: data } });
    }

    const mainContainer = {
        width: '60%',
        marginTop: '10rem',
    };

    return (
        <Container className='text-center' style={ mainContainer }>
            <h1 className='header'>Discover animes based on your mood</h1>
            <p className='subheader'>What's the mood today?</p>
            <MoodButtons fetchAnimes={fetchAnimes} />
        </Container>
    );
}

export default Home;
