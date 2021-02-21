import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignContainer = styled.div`
  /* background: #01bf71; */
  min-height: 695px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  overflow: hidden;
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 201, 122, 1) 100%
  );
`;
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled(Link)`
  margin-top: 32px;
  margin-left: 32px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  /* height: 100%; */
`;
export const FormContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Form = styled.div`
  background: #010101;
  /* color: #fff; */
  display: grid;
  max-width: 600px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 80px 32px;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;
export const FormTitle = styled.h1`
  color: #fff;
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
`;
export const FormLabel = styled.label`
  color: #fff;
  margin-bottom: 8px;
  font-size: 14px;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #01bf71;
  padding: 16px 0;
  border-radius: 4px;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  color: #fff;
  text-align: center;
  font-size: 14px;
  margin-top: 24px;
`;
