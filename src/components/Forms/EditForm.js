import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Buttons/Button';
import Heading from '../Heading/Heading';
import AppContext from '../../context';

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

class EditForm extends Component {
  state = {
    quantity: '',
  }

  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { editQuantity } = context;
          const id = context.editedItemId;
          const { name } = context.items.find((item) => item.id === id);

          const { quantity } = this.state;

          return (
            <StyledWrapper onSubmit={(e) => editQuantity(e, id, quantity)}>
              <Heading>
                Edit
                {' '}
                {name}
                {' '}
                quantity
              </Heading>
              <Input
                placeholder="Quantity"
                type="number"
                min="0"
                name="quantity"
                value={quantity}
                onChange={this.handleInputChange}
              />
              <Button type="submit" value="save changes" />
            </StyledWrapper>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default EditForm;
