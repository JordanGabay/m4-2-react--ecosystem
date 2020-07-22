import React from 'react';
import ListingGrid from './ListingGrid'
import {items} from '../data';
import styled from 'styled-components'

const ListingGridWrapper = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
margin-top:10%;
`

const Home = (props) => {
    let itemList = Object.values(items);
    
    return (
        <div>
        <h2>Fruit emporium sells the finest fruits from this world and beyond.</h2>
        <h3>Browse items:</h3>
        <ListingGridWrapper>
            <ListingGrid itemList={itemList}/>
        </ListingGridWrapper>
        </div>
    )
}

export default Home;