import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import { icons } from '../../icons';
import { appear } from '../../animations';

const StyledWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  position: relative;
  box-shadow: 0 5px 10px ${({ theme }) => theme.primary};
  animation: ${appear} 0.2s ease-in;
`;

const StyledContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const StyledButtonIcon = styled.button`
  display: inline-block;
  border: none;
  background: transparent;
  cursor: pointer;

  & > svg {
    color: ${({ theme }) => theme.gray};
    width: 24px;
    height: 24px;
    transition: all 0.2s;
  }

  &:hover svg {
    color: ${({ theme }) => theme.primary};
  }
`;

const ProductCard = ({
  id, name, category, quantity, unit, minStock, openEditModalFn, openRemoveModalFn,
}) => (
  <StyledWrapper>
    <CategoryIcon icon={icons[category]} />
    <StyledContent>
      <h3>{name}</h3>
      <p>
        Amount:
        {' '}
        {quantity}
      </p>
      <p>
        Unit:
        {' '}
        {unit}
      </p>
      <p>
        Min. stock:
        {' '}
        {minStock}
      </p>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <StyledButtonIcon onClick={() => openEditModalFn(id)}><FaEdit /></StyledButtonIcon>
      <StyledButtonIcon onClick={() => openRemoveModalFn(id)}><FaTrashAlt /></StyledButtonIcon>
    </StyledContent>
  </StyledWrapper>
);

export default ProductCard;
