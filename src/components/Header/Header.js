import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;

const StyledNav = styled.nav`
  display: flex;
  place-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  place-items: space-between center;
  list-style: none;
`;

const StyledListItem = styled.li`
  font-weight: ${({ theme }) => theme.bold};
  `;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  padding: 10px 30px;
  transition: all 0.2s;
  position: relative;

  &::after {
    display: block;
    content: '';
    position: absolute;
    width: 90%;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    bottom: 0;
    left: 50%;
    opacity: 0;
    transform: translateX(-100%);
    transition: all 0.2s;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};

    &::after {
      opacity: 1;
      transform: translateX(-50%);
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      opacity: 1;
      transform: translateX(-50%);
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <StyledNav>
      <StyledList>
        <StyledListItem><StyledNavLink to="/pantry">Pantry</StyledNavLink></StyledListItem>
        <StyledListItem><StyledNavLink to="/shopping">Shopping list</StyledNavLink></StyledListItem>
        <StyledListItem><StyledNavLink to="/settings">Settings</StyledNavLink></StyledListItem>
      </StyledList>
    </StyledNav>
  </StyledHeader>
);

export default Header;
