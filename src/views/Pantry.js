import React from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/SubHeading/SubHeading';
import ProductCard from '../components/ProductCard/ProductCard';
import Button from '../components/Buttons/RoundButton';
import AppContext from '../context';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px auto;
  padding: 0 200px;
  gap: 50px 20px;
  max-width: 1200px;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const Pantry = () => (
  <AppContext.Consumer>
    {({
      items, openModal, openEditModal, openRemoveModal,
    }) => (
      <>
        <Heading>Your pantry</Heading>
        <SubHeading>Check your stock. Add and remove items.</SubHeading>
        <StyledWrapper>
          {items.map(({
            name, category, quantity, unit, id, minStock,
          }) => (
            <ProductCard
              name={name}
              category={category}
              quantity={quantity}
              unit={unit}
              minStock={minStock}
              id={id}
              key={id}
              openEditModalFn={openEditModal}
              openRemoveModalFn={openRemoveModal}
            />
          ))}
          <StyledButton onClick={openModal}><FaPlus /></StyledButton>
        </StyledWrapper>
      </>
    )}
  </AppContext.Consumer>
);

export default Pantry;
