import React from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import { appear } from '../../animations';
import Form from '../Form/Form';

const StyledModalOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.secondaryTransparent};
  animation: ${appear} 0.2s ease-in;
`;

const StyledModalInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: ${({ theme }) => theme.lightGray};
  border-radius: 20px;
  box-shadow: 0 5px 10px ${({ theme }) => theme.primary};
  max-width: 700px;
  padding: 30px 60px;
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Modal = ({ closeModalFn }) => (
  <StyledModalOuter>
    <StyledModalInner>
      <StyledButton small onClick={closeModalFn}><MdClose /></StyledButton>
      <Heading>Add new item</Heading>
      <Form />
    </StyledModalInner>
  </StyledModalOuter>
);

export default Modal;
