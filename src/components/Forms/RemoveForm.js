import React from 'react';
import styled from 'styled-components';
import Button from '../Buttons/Button';
import Heading from '../Heading/Heading';
import AppContext from '../../context';

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const RemoveForm = () => (
  <AppContext.Consumer>
    {(context) => {
      const { removeItem } = context;
      const id = context.itemToRemoveId;
      const { name } = context.items.find((item) => item.id === id);

      return (
        <StyledWrapper onSubmit={(e) => removeItem(e, id)}>
          <Heading>
            Are you sure you want to remove
            {' '}
            {name}
            ?
          </Heading>
          <Button type="submit" value="yes" />
        </StyledWrapper>
      );
    }}
  </AppContext.Consumer>
);

export default RemoveForm;
