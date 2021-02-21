import React from "react";
import {
  SignContainer,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <SignContainer>
      <FormWrap>
        <Icon to="/">Fresh Market</Icon>
        <FormContent>
          <Form action="#">
            <FormTitle>sign in to your account</FormTitle>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required placeholder="Enter your email" />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot Password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </SignContainer>
  );
};

export default Signin;
