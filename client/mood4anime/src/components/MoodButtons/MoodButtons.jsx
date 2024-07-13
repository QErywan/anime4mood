import React from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const moods = [
    { name: 'Happy', emoji: '😁' },
    { name: 'Sad', emoji: '😔' },
    { name: 'Loved', emoji: '🤤' },
    { name: 'Curious', emoji: '🤤' },
    { name: 'Afraid', emoji: '🤤' },
    { name: 'Hungry', emoji: '🤤' },
    { name: 'Hungry', emoji: '🤤' },
    { name: 'Hungry', emoji: '🤤' },
]

const MoodButtons = ({ fetchAnimes }) => {
    return (
        <Row>
            {moods.map(( mood, index ) => (
                <Col xs={6} md={4} lg={3} key={index} className='mb-3 Col'>
                    <Button variant='outline-light' className='w-100' style={{borderColor: '#002756', borderWidth: '4px'}} onClick={() => fetchAnimes(mood.name)}>
                        <span role='img' aria-label={mood.name.toLowerCase()}>{mood.emoji}</span> <strong>{mood.name}</strong>
                    </Button>
                </Col>
            ))}
        </Row>
    )
}

export default MoodButtons;