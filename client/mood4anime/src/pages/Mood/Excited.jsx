import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Excited() {
    return (
        <Container className='text-center'>
            <Navbar mood='excited'/>
            <Recommendations />
        </Container>
    )
}

export default Excited;