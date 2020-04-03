import React from 'react';
import styled from 'styled-components';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/SubHeading/SubHeading';
import ProductCard from '../components/ProductCard/ProductCard';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px auto;
  padding: 0 20px;
  gap: 20px;
  max-width: 1200px;
`;

const Pantry = () => (
  <>
    <Heading>Your pantry</Heading>
    <SubHeading>Check your stock. Add and remove items.</SubHeading>
    <StyledWrapper>
      <ProductCard category="fruitAndVeggies" item="Bananas" amount="3 pcs" />
      <ProductCard category="meat" item="Beef" amount="3 kgs" />
      <ProductCard category="dairy" item="Cheese" amount="3 kgs" />
    </StyledWrapper>
  </>
);

export default Pantry;
