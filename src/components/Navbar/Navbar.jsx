import { Fragment, useContext, useState } from "react";
import { AddCartContext } from "../../App";
import styled from "styled-components";
import NavLogo from "../../assets/images/logo.svg";
import CartIcon from "../../assets/icons/icon-cart.svg";
import Avatar from "../../assets/images/image-avatar.png";
import Cart from "../Cart/Cart";
const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [cartItem, setCartItem] = useContext(AddCartContext);
  const [cartToggle, setCartToggle] = useState(false);

  const cartToggleHandler = () => {
    setCartToggle((value) => !value);
  };
  return (
    <Fragment>
      <NavbarMainContainer>
        <NavbarLogoContainer>
          <img src={NavLogo} alt="logo" />
          <NavbarLinks>
            <a>Collections</a>
            <a>Men</a>
            <a>Women</a>
            <a>About</a>
            <a>Contact</a>
          </NavbarLinks>
        </NavbarLogoContainer>
        <CartAvatarContainer>
          <CartPicture src={CartIcon} alt="Cart" onClick={cartToggleHandler} />
          <CartItemsCount>{cartItem.length}</CartItemsCount>
          <AvatarPicture src={Avatar} alt="Avatar" />
        </CartAvatarContainer>
      </NavbarMainContainer>
      {cartToggle && <Cart />}
    </Fragment>
  );
};

export default Navbar;

const NavbarMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 49px;
  border-bottom: 1px solid #e4e9f2;
`;

const NavbarLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 56px;
`;
const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  color: #69707d;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;

  cursor: pointer;
  @media screen and (max-width: 769px) {
    a {
      display: none;
    }
  }
`;
const CartAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 46px;
  position: relative;
  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;
const AvatarPicture = styled.img`
  width: 50px;
  max-width: 100%;
  height: 50px;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    width: 24px;
    height: 24px;
  }
`;
const CartPicture = styled.img`
  height: 20px;
  cursor: pointer;
`;

// cart counter

const CartItemsCount = styled.span`
  padding: 2px 6px;
  border-radius: 7px;
  background-color: #ff7e1b;
  font-size: 11px;
  color: #fff;
  position: absolute;
  top: 7px;
  left: -4px;

  @media screen and (max-width: 480px) {
    top: -6px;
  }
`;
