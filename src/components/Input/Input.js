import styled from 'styled-components';

const StyledInput = styled.input`
  border: 2px solid ${({ theme }) => theme.black};
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  padding: 15px;
  margin-bottom: 20px;
  transition: all 0.2s;

  &:focus {
    outline: 0;
    border-color: ${({ theme }) => theme.primary}
  }
`;

export default StyledInput;
