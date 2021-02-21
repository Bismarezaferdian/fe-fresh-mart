import styled from "styled-components";

export const ServiceContainer = styled.div`
  height: 740px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #000;
  /* background: ${({ bgColor }) => (bgColor ? "#0000" : "#fff ")}; */

  @media screen and (max-width: 768px) {
    height: 1200px;
  }

  @media screen and (max-width: 500px) {
    height: 1300px;
  }
`;

export const ServiceWrapp = styled.div`
  max-width: 1000px;
  display: grid;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin: 0 20px;
    grid-gap: 50px;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  background: #fff;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  min-height: 300px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 676px) {
    max-height: 300px;
    /* max-width: 300px; */
    padding: 0 auto;
  }

  &:hover {
    transform: scale(1.08);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServiceIcon = styled.img`
  height: 80px;
  width: 80px;
  margin-bottom: 34px;
`;

export const ServiceH1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 64px;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 2rem;
    margin-top: 100px;
  }

  @media screen and (max-width: 660px) {
    font-size: 2rem;
    margin-top: 100px;
  }
`;
export const ServiceTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 10px;
`;
export const ServiceDesc = styled.p`
  font-size: 0.8rem;
  text-align: center;
`;
