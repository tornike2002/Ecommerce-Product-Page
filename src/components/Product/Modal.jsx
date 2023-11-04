import styled from "styled-components";
import { Fragment } from "react";
import Product from "./Product";
const Modal = () => {
  return (
    <Fragment>
      <ModalBg>
        <Product popUp={true}/>
      </ModalBg>
    </Fragment>
  );
};

export default Modal;

const ModalBg = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.75);
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  overflow-x: hidden;
`;
