import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Happy() {
    return (
        <Container className='text-center'>
            <Navbar mood='happy'/>
            <Recommendations />
        </Container>
    )
}

export default Happy;