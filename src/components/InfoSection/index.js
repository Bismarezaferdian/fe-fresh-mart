import React from "react";
import { Button } from "../ButtonElement";
import Bounce from "react-reveal/Bounce";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  ImgWrap,
  BtnWrap,
} from "./InfoElement";

const InfoSection = ({
  id,
  lightBg,
  imgStart,
  lightText,
  darkText,
  topLine,
  headLine,
  description,
  img,
  btnLabel,
  primary,
  dark,
  typeDisplay,
}) => {
  return (
    <>
      <InfoContainer id={id} lightBg={lightBg}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <Bounce top delay={600}>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headLine}</Heading>
                  <Subtitle darkText={darkText}>{description}</Subtitle>
                  <BtnWrap>
                    <Button
                      to="home"
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      smooth={true}
                      duration={800}
                      spy={true}
                      exact="true"
                      offset={80}
                      typeDisplay={typeDisplay ? 1 : 0}
                    >
                      {btnLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Bounce>
            </Column1>
            <Column2>
              <ImgWrap>
                <Bounce bottom delay={200}>
                  <Img src={img} />
                </Bounce>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
