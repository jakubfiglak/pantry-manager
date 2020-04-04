import React, { Component } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import Heading from '../components/Heading/Heading';
import SubHeading from '../components/SubHeading/SubHeading';
import ProductCard from '../components/ProductCard/ProductCard';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import AppContext from '../context';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 50px auto;
  padding: 0 200px;
  gap: 50px 20px;
  max-width: 1200px;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

class Pantry extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <AppContext.Consumer>
        {({ items }) => (
          <>
            <Heading>Your pantry</Heading>
            <SubHeading>Check your stock. Add and remove items.</SubHeading>
            <StyledWrapper>
              {items.map(({
                name, category, quantity, unit,
              }) => (
                <ProductCard name={name} category={category} quantity={quantity} unit={unit} />
              ))}
              <StyledButton onClick={this.openModal}><FaPlus /></StyledButton>
            </StyledWrapper>
            {isModalOpen && <Modal closeModalFn={this.closeModal} />}
          </>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Pantry;
