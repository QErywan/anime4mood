import React from 'react';
import { useNavigate } from 'react-router-dom'
import MoodButtons from '../../components/MoodButtons/MoodButtons';
import './Home.css'

function Home() {
    const navigate = useNavigate();

    const fetchAnimes = async (mood) => {
        console.log(mood.toLowerCase());
        const response = await fetch(`http://localhost:8080/animes/${mood.toLowerCase()}`)
        const data = await response.json();
        navigate(`/animes/${mood.toLowerCase()}`, { state : { animes: data } });
    }


    return (
        <div className="Home">
        <h1>Discover animes based on your mood</h1>
        <MoodButtons fetchAnimes={fetchAnimes} />
        </div>
    );
}

export default Home;
