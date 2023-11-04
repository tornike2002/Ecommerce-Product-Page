/* eslint-disable no-unused-vars */
import { useState, createContext } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";
import Modal from "./components/Product/Modal";
import AddCart from "./components/Cart/AddCart";

export const ModalContext = createContext();
export const CartContext = createContext();
export const AddCartContext = createContext();

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <CartContext.Provider value={[cartCount, setCartCount]}>
        <AddCartContext.Provider value={[cartItem, setCartItem]}>
          <ModalContext.Provider value={[toggleModal, setToggleModal]}>
            <MainContainer>
              <Navbar />
              <TitleProductContainer>
                <Product popUp={false} />
                {toggleModal && <Modal />}
                <AddCart />
              </TitleProductContainer>
            </MainContainer>
          </ModalContext.Provider>
        </AddCartContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default App;

const MainContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: auto;
`;
const TitleProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 975px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
`;
