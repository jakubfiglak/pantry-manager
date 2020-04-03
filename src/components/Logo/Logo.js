import React from 'react';
import styled from 'styled-components';
import { MdKitchen } from 'react-icons/md';

const StyledIcon = styled(MdKitchen)`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.primary};
`;

const StyledName = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.primary};
  font-weight: ${({ theme }) => theme.bold};
  text-transform: uppercase;
  margin-inline-start: 10px;
`;

const StyledWrapper = styled.div`
  display: flex;
  place-items: center;
`;

const Logo = () => (
  <StyledWrapper>
    <StyledIcon />
    <StyledName>Pantry Manager</StyledName>
  </StyledWrapper>
);

export default Logo;
