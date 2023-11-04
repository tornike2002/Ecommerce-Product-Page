import { Fragment, useContext, useState } from "react";
import styled from "styled-components";
import decrease from "../../assets/icons/icon-minus.svg";
import increase from "../../assets/icons/icon-plus.svg";
import { CartContext, AddCartContext } from "../../App";

const AddCart = () => {
  const [cartCount, setCartCount] = useContext(CartContext);
  const [cartItem, setCartItem] = useContext(AddCartContext);
  // eslint-disable-next-line no-unused-vars
  const [price, setPrice] = useState(125);
  const itemMinusHandler = () => {
    if (cartCount == 0) {
      return;
    } else {
      setCartCount((value) => value - 1);
    }
  };
  const itemPlusHandler = () => {
    if (cartCount > 29) {
      return;
    } else {
      setCartCount((value) => value + 1);
    }
  };

  const AddCartItemHandler = () => {
    if (cartCount > 0) {
      const itemsToAdd = Array(cartCount).fill(price);
      setCartItem([...cartItem, ...itemsToAdd]);
    }
  };
  return (
    <Fragment>
      <CartContainer>
        {/* title area */}
        <ProductTitle>Sneaker Company</ProductTitle>
        <ProductMainTitle>Fall Limited Edition Sneakers</ProductMainTitle>
        <ProductParagraph>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </ProductParagraph>
        {/* title area */}
        {/* price category */}
        <DiscountContainer>
          <ProductPrice>${price}</ProductPrice>
          <ProductDiscount>50%</ProductDiscount>
        </DiscountContainer>
        <OldPrice>$250.00</OldPrice>
        {/* price category */}
        {/* buttons */}
        <CartButtonsContainer>
          <AmountContainer>
            <DecreaseButton
              src={decrease}
              alt="decrease"
              onClick={itemMinusHandler}
            />
            <AmountSpan>{cartCount}</AmountSpan>
            <IncreaseButton
              src={increase}
              alt="increase"
              onClick={itemPlusHandler}
            />
          </AmountContainer>
          <AddCartButton type="button" onClick={AddCartItemHandler}>
            Add to cart
          </AddCartButton>
        </CartButtonsContainer>
        {/* buttons */}
      </CartContainer>
    </Fragment>
  );
};

export default AddCart;
const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  font-family: "Kumbh Sans", sans-serif;
  font-style: normal;
  @media screen and (max-width: 975px) {
    max-width: 80%;
  }
  @media screen and (max-width: 480px) {
    max-width: 90%;
  }
`;
const ProductTitle = styled.h3`
  color: #ff7e1b;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    font-size: 12px;
    letter-spacing: 1.846px;
  }
`;

const ProductMainTitle = styled.h1`
  color: #1d2026;
  font-size: 44px;
  font-weight: 700;
  line-height: 48px;
  @media screen and (max-width: 480px) {
    font-size: 28px;
    line-height: 32px;
  }
`;

const ProductParagraph = styled.p`
  color: #69707d;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  max-width: 50%;
  @media screen and (max-width: 975px) {
    max-width: 90%;
  }
  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 25px;
    max-width: 100%;
  }
`;
// products price down
const ProductPrice = styled.span`
  color: #1d2026;
  font-size: 28px;
  font-weight: 700;
  line-height: normal;
`;
const ProductDiscount = styled.span`
  color: #ff7e1b;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  border-radius: 6px;
  background-color: #ffeee2;
  padding: 5px 5px;
`;
const DiscountContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const OldPrice = styled.span`
  color: #b6bcc8;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-decoration-line: line-through;
`;
// cart buttons down
const CartButtonsContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const DecreaseButton = styled.img`
  cursor: pointer;
`;
const IncreaseButton = styled.img`
  cursor: pointer;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background-color: #f6f8fd;
  padding: 10px 10px;
  border-radius: 6px;
`;
const AmountSpan = styled.span`
  color: #1d2026;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
`;
const AddCartButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  background-color: #ff7e1b;
  box-shadow: 0px 20px 50px -20px #ff7e1b;
  padding: 11px 70px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 10px;
`;
