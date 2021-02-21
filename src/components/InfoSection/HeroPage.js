import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import Hero from "../../images/hero.svg";
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
  ArrowForward,
  ArrowRight,
  BtnLink,
} from "./InfoElement";

const InfoSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <InfoContainer id="home" lightBg={true}>
        <InfoWrapper>
          <InfoRow imgStart={false}>
            <Column1>
              <Bounce top delay={600}>
                <TextWrapper>
                  <TopLine>Belanja mudah kapan saja</TopLine>
                  <Heading lightText={false}>Gratis Ongkir !!!</Heading>
                  <Subtitle darkText={true}>
                    Dengan belanja min 100 rb, kami siap antar kerumah anda
                    tanpa tambahan biaya
                  </Subtitle>
                  <BtnWrap>
                    <BtnLink
                      onMouseEnter={onHover}
                      onMouseLeave={onHover}
                      to="/signUp"
                    >
                      Daftar Sekarang{" "}
                      {hover ? <ArrowForward /> : <ArrowRight />}
                    </BtnLink>
                  </BtnWrap>
                </TextWrapper>
              </Bounce>
            </Column1>
            <Column2>
              <ImgWrap>
                <Bounce bottom delay={200}>
                  <Img src={Hero} />
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
