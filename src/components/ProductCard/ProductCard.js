import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styled from 'styled-components';
import CategoryIcon from '../CategoryIcon/CategoryIcon';
import { icons } from '../../icons';

const StyledWrapper = styled.div`
  border: 4px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  position: relative;
  box-shadow: 0 5px 10px ${({ theme }) => theme.primary};
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
  name, category, quantity, unit,
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
        Category:
        {' '}
        {category}
      </p>
      <StyledButtonIcon><FaEdit /></StyledButtonIcon>
      <StyledButtonIcon><FaTrashAlt /></StyledButtonIcon>
    </StyledContent>
  </StyledWrapper>
);

export default ProductCard;
