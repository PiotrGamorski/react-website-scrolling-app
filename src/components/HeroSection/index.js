import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBackground,
  VideoBackground,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        ></VideoBackground>
      </HeroBackground>
      <HeroContent>
        <HeroH1>Virtual Banking Made easy</HeroH1>
        <HeroP>
          Sign up for a new account today and recieve $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={() => onHover()}
            onMouseLeave={() => onHover()}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
