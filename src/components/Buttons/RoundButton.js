import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  border: 0;
  box-shadow: 0 5px 10px ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;

  &>svg {
    width: 50%;
    height: 50%;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  };

  &:hover {
    transform: scale(1.1);
  }

  ${({ small }) => small && css`
    width: 30px;
    height: 30px;
  `}
`;

export default StyledButton;
