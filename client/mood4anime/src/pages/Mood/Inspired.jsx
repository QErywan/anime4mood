import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Inspired() {
    return (
        <Container className='text-center'>
            <Navbar mood='inspired'/>
            <Recommendations />
        </Container>
    )
}

export default Inspired;