import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Scared() {
    return (
        <Container className='text-center'>
            <Navbar mood='scared'/>
            <Recommendations />
        </Container>
    )
}

export default Scared;