import React from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import {items, sellers} from '../data'

const Button = styled.button`
color:white;
background-color:rgb(102, 55, 255);
border-radius:5px;
height:30px;
width:130px;
`;

const SellerBox = styled.div`
display:flex;
margin-top: 15px;
`

const FlexBox = styled.div`
display: flex;
`

const ContainerBox = styled.div`
margin-top:10%;
font-family:sans-serif;
margin-left: 250px;
`

const StyleImage = styled.img`
height: 280px;
border-radius: 20px;
float:left;
margin-right: 20px;
`

const FruitLatin = styled.h4`
color:darkgrey;
`
const FruitDescription = styled.p`
font-size:15px;
width: 70%;
`
const CountryOf = styled.p`
font-style:italic;
font-size:12px;
`
const SellerImage = styled.img`
height:40px;
border-radius: 50px;
margin-right:10px;
`



const ItemDetails = () => {
  const { itemId } = useParams();
  const fruit = items[itemId];
  if (fruit.quantity >= 0) {
    return (
      <ContainerBox>
       
        <StyleImage src={fruit.imageSrc} />
        
          <h3>{fruit.name}</h3>
          <FruitLatin>{fruit.latinName}</FruitLatin>
          <FruitDescription>{fruit.description}</FruitDescription>
          <CountryOf>Product of <b>{fruit.countryOfOrigin}</b></CountryOf>
          <Button>${fruit.price} - Buy now</Button>
          <FlexBox>
          
          <SellerBox>
          <SellerImage
            src={sellers[fruit.sellerId].avatarSrc}
            alt={sellers[fruit.sellerId].id}
          />
          <p>Sold by: <b>{sellers[fruit.sellerId].storeName}</b></p>
          </SellerBox>
          </FlexBox>
          
          </ContainerBox>
        
    );
  } else {
  }
};
export default ItemDetails;