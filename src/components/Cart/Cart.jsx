/* eslint-disable no-unused-vars */
import styled from "styled-components";
import cartItemPicture from "../../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../../assets/icons/icon-delete.svg"
import { useContext } from "react";
import { AddCartContext } from "../../App";
const Cart = () => {
  const [cartItem, setCartItem] = useContext(AddCartContext);
  const removeCartItem = () => {
    setCartItem([]);
  }
  return (
    <CartBoxContainer>
      <CartBoxWrapper>
        <CartBoxTitle>Cart</CartBoxTitle>
      </CartBoxWrapper>

      {cartItem.length != 0 ? (
        <CartItemContainer>
          <CartItemImage src={cartItemPicture} alt="dsa" />
          <CartItemsWrapper>
            <CartItemTitle>Fall Limited Edition Sneakers</CartItemTitle>
            <CartPricesWrapper>
              <CartItemCalculator>$125.00x{cartItem.length}</CartItemCalculator>
              <CartItemCalculated>${125 * cartItem.length}</CartItemCalculated>
              <DeleteCartItems src={deleteIcon} alt="delete" onClick={removeCartItem}/>
            </CartPricesWrapper>
          </CartItemsWrapper>
        </CartItemContainer>
      ) : (
        <CartItemEmpty>Your cart is empty.</CartItemEmpty>
      )}
    </CartBoxContainer>
  );
};

export default Cart;

//cart
const CartBoxContainer = styled.div`
  position: absolute;
  right: 10%;
  top: 10%;
  background-color: #fcfafa;
  width: 360px;
  max-width: 100%;
  min-height: 256px;
  z-index: 999;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
  border-radius: 10px;
  font-family: "Kumbh Sans", sans-serif;
  @media screen and (max-width: 430px) {
    right: 3%;
  }
`;
const CartBoxWrapper = styled.div``;
const CartBoxTitle = styled.h1`
  font-family: "Kumbh Sans", sans-serif;
  color: #1d2026;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 24px;
  padding-bottom: 17px;
  border-bottom: 1px solid #ccc;
`;
// cart added product
const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const CartItemTitle = styled.h1`
  color: #69707d;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CartItemCalculator = styled.span`
  color: #69707d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 1px;
  padding-right: 8px;
`;

const CartItemCalculated = styled.span`
  color: #1d2026;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
`;

const CartItemEmpty = styled.h1`
  color: #69707d;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 15px;
`;

const DeleteCartItems = styled.img`
  cursor: pointer;
  padding-left: 25px;
`
const CartPricesWrapper = styled.div`
  display: flex;
  align-items: center;
`