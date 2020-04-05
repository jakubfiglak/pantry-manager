import React, { Component } from 'react';
import styled from 'styled-components';
import AppContext from '../../context';
import StyledInput from '../Input/Input';
import StyledSubmitBtn from '../Buttons/Button';
import Heading from '../Heading/Heading';

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInputSet = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

class Form extends Component {
  state = {
    name: '',
    category: '',
    quantity: '',
    unit: '',
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          const { categories, units, addItem } = context;
          const {
            name, category, quantity, unit,
          } = this.state;

          return (
            <>
              <Heading>Add new item</Heading>
              <StyledWrapper onSubmit={(e) => addItem(e, this.state)}>
                <StyledInput
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleInputChange}
                />
                <StyledInput
                  as="select"
                  name="category"
                  value={category}
                  onChange={this.handleInputChange}
                >
                  <option value="">Category</option>
                  {categories.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option>
                  ))}
                </StyledInput>
                <StyledInputSet>
                  <StyledInput
                    placeholder="Quantity"
                    type="number"
                    min="0"
                    name="quantity"
                    value={quantity}
                    onChange={this.handleInputChange}
                  />
                  <StyledInput
                    as="select"
                    name="unit"
                    value={unit}
                    onChange={this.handleInputChange}
                  >
                    <option value="">Unit</option>
                    {units.map((un) => (
                      <option value={un} key={un}>{un}</option>
                    ))}
                  </StyledInput>
                </StyledInputSet>
                <StyledSubmitBtn type="submit" value="add" />
              </StyledWrapper>
            </>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Form;
