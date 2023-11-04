/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useState, useContext } from "react";
import styled from "styled-components";
import SmallProduct1 from "../../assets/images/image-product-1-thumbnail.jpg";
import BigProduct1 from "../../assets/images/image-product-1.jpg";
import SmallProduct2 from "../../assets/images/image-product-2-thumbnail.jpg";
import BigProduct2 from "../../assets/images/image-product-2.jpg";
import SmallProduct3 from "../../assets/images/image-product-3-thumbnail.jpg";
import BigProduct3 from "../../assets/images/image-product-3.jpg";
import SmallProduct4 from "../../assets/images/image-product-4-thumbnail.jpg";
import BigProduct4 from "../../assets/images/image-product-4.jpg";
import leftArrow from "../../assets/icons/icon-previous.svg";
import rightArrow from "../../assets/icons/icon-next.svg";
import closeModal from "../../assets/icons/icon-close.svg";

import { ModalContext } from "../../App";
const DUMMY_ARRAY = [
  { id: 1, ImgBig: `${BigProduct1}`, ImgSmall: `${SmallProduct1}` },
  { id: 2, ImgBig: `${BigProduct2}`, ImgSmall: `${SmallProduct2}` },
  { id: 3, ImgBig: `${BigProduct3}`, ImgSmall: `${SmallProduct3}` },
  { id: 4, ImgBig: `${BigProduct4}`, ImgSmall: `${SmallProduct4}` },
];
const Product = ({ popUp }) => {
  const [selectedImage, setSelectedImage] = useState(BigProduct1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [toggleModal, setToggleModal] = useContext(ModalContext);

  const handleSmallProductClick = (newImage, index) => {
    setSelectedImage(newImage);
    setCurrentIndex(index);
  };
  const handlePrev = () => {
    const prevIndex =
      (currentIndex - 1 + DUMMY_ARRAY.length) % DUMMY_ARRAY.length;
    handleSmallProductClick(DUMMY_ARRAY[prevIndex].ImgBig, prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % DUMMY_ARRAY.length;
    handleSmallProductClick(DUMMY_ARRAY[nextIndex].ImgBig, nextIndex);
  };

  const modalToggleHandler = () => {
    setToggleModal((value) => !value);
  };

  return (
    <Fragment>
      <BigProductDiv>
        {popUp && (
          <CloseModalIcon
            src={closeModal}
            alt="closemodal"
            onClick={modalToggleHandler}
          />
        )}
        {popUp && (
          <CarouselArrow className="prev" onClick={handlePrev}>
            <img src={leftArrow} alt="" />
          </CarouselArrow>
        )}
        <MainProductImg
          src={selectedImage}
          alt="bigproduct"
          onClick={modalToggleHandler}
        />
        {popUp && (
          <CarouselArrow className="next" onClick={handleNext}>
            <img src={rightArrow} alt="" />
          </CarouselArrow>
        )}
        <SmallProductImgContainer>
          {DUMMY_ARRAY.map((small, index) => (
            <div
              key={index}
              onClick={() => handleSmallProductClick(small.ImgBig, index)}
            >
              <SmallProductImg src={small.ImgSmall} alt="images" />
            </div>
          ))}
        </SmallProductImgContainer>
      </BigProductDiv>
    </Fragment>
  );
};

export default Product;

const BigProductDiv = styled.div`
  margin: 70px 40px;
  position: relative;
  @media screen and (max-width: 480px) {
    margin: 70px 5px;
  }
`;
const MainProductImg = styled.img`
  width: 445px;
  max-width: 100%;
  min-height: 445px;
  border-radius: 15px;
  cursor: pointer;
  background: lightgray 50% / cover no-repeat;
`;
const SmallProductImg = styled.img`
  width: 88px;
  max-width: 100%;
  min-height: 88px;
  border-radius: 10px;
  border: 2px solid #ff7e1b;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.75) 0%,
      rgba(255, 255, 255, 0.75) 100%
    ),
    lightgray 50% / cover no-repeat;
  cursor: pointer;
`;
const SmallProductImgContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  padding-top: 32px;
`;
const CarouselArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  &.prev {
    left: -4%;
    top: 43%;
    @media screen and (max-width: 480px){
      left: -2%;
    }
  }

  &.next {
    right: -4%;
    top: 43%;
    @media screen and (max-width: 480px){
      right: -2%;
    }
  }
`;

const CloseModalIcon = styled.img`
  position: absolute;
  top: -5%;
  right: 0%;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
