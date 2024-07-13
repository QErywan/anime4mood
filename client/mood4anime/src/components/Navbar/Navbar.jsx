import React from 'react';
import { useNavigate } from 'react-router-dom';

import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

import './Navbar.css';

function Navbar({ mood }) {

    const navigate = useNavigate();


    const backButtonAction = () => {
        navigate('/');
    };

    const cardStyle = {
        width: '70%',
        margin: '0 auto 0 auto',
        backgroundColor: '#0c0c0c',
        borderColor: '#0a21c0',
        borderWidth: '4px',
    };

    return (
        <Card className='py-3 px-1 my-5' style={ cardStyle }>
            <Row>
                <Col className='navText'>Back icon</Col>
                <Col className='navText'>Feeling <strong>{mood}</strong> today?</Col>
                <Col className='navText'>
                    <Button onClick={ backButtonAction }>Change mood</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default Navbar;