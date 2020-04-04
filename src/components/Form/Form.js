import React, { Component } from 'react';
import styled from 'styled-components';
import AppContext from '../../context';

const StyledWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

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

const StyledInputSet = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
`;

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
                  <option value={cat}>{cat}</option>
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
                    <option value={un}>{un}</option>
                  ))}
                </StyledInput>
              </StyledInputSet>
              <StyledSubmitBtn type="submit" value="add" />
            </StyledWrapper>
          );
        }}
      </AppContext.Consumer>
    );
  }
}

export default Form;
