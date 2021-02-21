import React, { useState } from "react";
// import Video from "../../videos/video.mp4";
import Image from "../../images/Hero.jpg";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroWrap,
  HeroImg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroWrap>
        {/* <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg> */}
        <HeroImg src={Image} />
        <HeroContent>
          <HeroH1>90's snaxclub</HeroH1>
          <HeroP>Banana chips by 90's snaxclub taste, Healty, Low Fat.</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              All variant{hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroWrap>
    </HeroContainer>
  );
};

export default HeroSection;
