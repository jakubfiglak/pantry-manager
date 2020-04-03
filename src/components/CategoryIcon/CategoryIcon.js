import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary};
  display: flex;
  place-items: center center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  & > svg {
    color: white;
    width: 24px;
    height: 24px;
    margin: 0 auto;
  }
`;

const CategoryIcon = ({ icon }) => (
  <StyledWrapper>
    {icon}
  </StyledWrapper>
);

export default CategoryIcon;
