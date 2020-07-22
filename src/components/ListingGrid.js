import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link} from "react-router-dom";

const FruitBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% / 3);
  margin: 0.5rem 0;
`;

const StyledImage = styled.img`
  height: 200px;
  border-radius: 20px;
`;

const StyledName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: sans-serif;
`;
const StyledLatinName = styled.span`
  font-weight: bold;
  font-family: sans-serif;
`;

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => {
    return (
        <FruitBox key={item.id}>
            <Link to={`/items/${item.id}`}>
          <StyledImage src={item.imageSrc} alt={item.name} />
            </Link>
          <StyledName>{item.name}</StyledName>
          <StyledLatinName>{item.latinName}</StyledLatinName>
        </FruitBox>
    );
  });
};

export default ListingGrid;
