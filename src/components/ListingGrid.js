import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
`;

const StyledName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
const StyledLatinName = styled.span`
  font-weight: bold;
`;

const ListingGrid = ({ itemList }) => {
  return itemList.map((item) => {
    return (
        <FruitBox>
          <StyledImage src={item.imageSrc} alt={item.name} />
          <StyledName>{item.name}</StyledName>
          <StyledLatinName>{item.latinName}</StyledLatinName>
        </FruitBox>
    );
  });
};

export default ListingGrid;
