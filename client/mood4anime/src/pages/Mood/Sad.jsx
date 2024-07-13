import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Sad() {
    return (
        <Container className='text-center'>
            <Navbar mood='sad'/>
            <Recommendations />
        </Container>
    )
}

export default Sad;