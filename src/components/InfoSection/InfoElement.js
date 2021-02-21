import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const InfoWrapper = styled.div`
  /* background: greenyellow; */
  display: grid;
  justify-content: center;
  max-width: 1100px;
  width: 100%;
  height: 800px;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
`;
export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  margin-top: 48px;
  margin-bottom: 48px;
  align-items: center;
  grid-template-areas: "col1 col2";
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `"col2 col1"` : `"col1 col2" `};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2' 'col1'` : `'col1' 'col2'`};
  }
`;

export const Column1 = styled.div`
  /* background: red; */
  margin-bottom: 10px;
  text-align: start;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin: 10px 0;
  padding: 0 10px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 780px) {
    font-size: 24px;
  }
`;
export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const ImgWrap = styled.div`
  max-width: 550px;
  margin-top: 10px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const BtnWrap = styled.div`
  display: flex;
  text-align: center;
`;

export const BtnLink = styled(Link)`
  background: #01bf71;
  border-radius: 50px;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  align-items: center;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 0px 8px rgba(222, 226, 221);

  &:hover {
    background: #1cfd7b;
    color: #7a7a7a;
    transition: 0.2s ease-in-out;
    /* transform: scale(1.05); */
    transform: translateX(2em);
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2 ease-in-out;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2 ease-in-out;
`;
