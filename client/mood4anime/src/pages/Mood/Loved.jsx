import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Recommendations from '../../components/Recommendations/Recommendations';

import Container from 'react-bootstrap/esm/Container';

function Loved() {
    return (
        <Container className='text-center'>
            <Navbar mood='loved'/>
            <Recommendations />
        </Container>
    )
}

export default Loved;