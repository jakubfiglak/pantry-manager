import React from 'react';
import styled from 'styled-components';

const StyledListWrapper = styled.ul`
  list-style: none;
  margin: 50px auto;
  text-align: center;
  padding: 0;
  width: 50%;
`;

const StyledListElement = styled.li`
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

const List = () => (
  <StyledListWrapper>
    <StyledListElement>bananas - 3 pcs</StyledListElement>
    <StyledListElement>apples - 3 kgs</StyledListElement>
    <StyledListElement>milk - 3 litres</StyledListElement>
  </StyledListWrapper>
);

export default List;