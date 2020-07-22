import React from 'react';
import ListingGrid from './ListingGrid'
import {items} from '../data';
import styled from 'styled-components'

const ListingGridWrapper = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin-top:10%;
`;

const TextInfo = styled.h2`
color: darkgrey;
font-family: sans-serif;
text-align: center;
`;

const Browse = styled.h3`
color: darkgrey;
font-family: sans-serif;
text-align:center;
`



const Home = (props) => {
    let itemList = Object.values(items);
    
    return (
        <div>
        <TextInfo>Fruit emporium sells the finest fruits from this world and beyond.</TextInfo>
        <Browse>Browse items:</Browse>
        <ListingGridWrapper>
            <ListingGrid itemList={itemList}/>
        </ListingGridWrapper>
        </div>
    )
}

export default Home;