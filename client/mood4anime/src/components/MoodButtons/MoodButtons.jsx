import React from 'react';

import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const moods = [
    { name: 'Happy', emoji: '😁' },
    { name: 'Sad', emoji: '😔' },
    { name: 'Loved', emoji: '😍' },
    { name: 'Curious', emoji: '🤔' },
    { name: 'Scared', emoji: '😱' },
    { name: 'Excited', emoji: '😆' },
    { name: 'Relaxed', emoji: '😌' },
    { name: 'Inspired', emoji: '🤩' },
]

const MoodButtons = ({ navToAnime }) => {
    return (
        <Row>
            {moods.map(( mood, index ) => (
                <Col xs={6} md={4} lg={3} key={index} className='mb-3 Col'>
                    <Button variant='outline-light' className='w-100' style={{borderColor: '#002756', borderWidth: '4px'}} onClick={() => navToAnime(mood.name)}>
                        <span role='img' aria-label={mood.name.toLowerCase()}>{mood.emoji}</span> <strong>{mood.name}</strong>
                    </Button>
                </Col>
            ))}
        </Row>
    )
}

export default MoodButtons;