import styled from 'styled-components';

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
`;

export default StyledHeading;
