import React from 'react';
import styled from 'styled-components';

const AboutUs = styled.h3`
font-family:sans-serif;
color:darkgrey;
text-align: center;
`






const About = (props) => {
    return (
        <AboutUs>
            Fruit emporium is founded on a very simple principle: 
            Fruit is good. We carry the finest selection of produce from around the world, from tart citrus to sweet cherries. 
            Our sellers are world-class, and your fruit is guaranteed to be worthy of auction in Asian markets.
            </AboutUs>
    )
}

export default About;