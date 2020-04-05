import styled from 'styled-components';

const StyledSubmitBtn = styled.input`
  border: 0;
  background: ${({ theme }) => theme.primary};
  color: white;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.bold};
  padding: 15px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;

export default StyledSubmitBtn;
