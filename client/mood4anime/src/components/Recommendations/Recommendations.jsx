import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Spinner from 'react-bootstrap/Spinner';

import './Recommendations.css'


const fetchAnimes = async (mood) => {
    try {
        const response = await fetch(`https://mood4anime-server.vercel.app/animes/${mood.toLowerCase()}`);
        // const response = await fetch(`http://localhost:8080/animes/${mood.toLowerCase()}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

function Recommendations() {
    const location = useLocation();
    const mood = location.state;

    const [animes, setAnimes] = useState([]);
    const [cur, setCur] = useState(0);
    const [loading, setLoading] = useState(true);
    const [prevDisabled, setPrevDisabled] = useState(true);
    const [nextDisabled, setNextDisabled] = useState(false);

    const prev = () => {
        setCur(cur => cur - 1);
    };

    const next = () => {
        setCur(cur => cur + 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const data = await fetchAnimes(mood);
            await new Promise(resolve => setTimeout(resolve, 3000));
            setAnimes(data);
            setLoading(false);
        };

        fetchData();
    }, [mood]);

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

    const imageContainerStyle = {
        height: '22rem',
        width: '100%'
    }

    if (loading) {
        return (
            <Card style={ cardStyle }>
                <div className='text-center py-5'>
                    <Spinner animation="grow" role="status" variant='light'></Spinner>
                    <p className='text'>Loading...</p>
                </div>
            </Card>
            
        );
    }  else {
        return (
            <Card className='py-4' style={ cardStyle }>
                <div style={imageContainerStyle}>
                    <a href={animes[cur].siteUrl} target='_blank' rel='noreferrer'><img src={animes[cur].coverImage.large} alt={animes[cur].title.romaji} /></a>
                </div>
                <div>
                    <h2 className='romajiTitle text'><strong>{animes[cur].title.romaji}</strong></h2>
                    <p className='englishTitle text'>{animes[cur].title.english ? animes[cur].title.english : animes[cur].title.romaji}</p>
                </div>
                <div>
                    
                </div>
                <div>
                    <p className='text'>
                        {animes[cur].genres.map(genre => (
                            <Badge key={genre} pill bg='primary' className='mx-1'>{genre}</Badge>
                        ))}
                    </p>
                </div>
                <div>
                    <p className='text'>{animes[cur]?.description}</p>
                </div>
                <div className='md-2'>
                    <Button variant='outline-primary' className='text' disabled={prevDisabled} onClick={prev}>Back</Button>
                    <Button variant='outline-primary' className='text' disabled={nextDisabled} onClick={next}>Next</Button>
                </div>
            </Card>
        );
    }

    
}

export default Recommendations;
