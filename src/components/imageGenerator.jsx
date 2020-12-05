import React from "react";
import Clear from "../img/Clear.png";
import Hail from "../img/Hail.png";
import HeavyCloud from "../img/HeavyCloud.png";
import HeavyRain from "../img/HeavyRain.png";
import LightCloud from "../img/LightCloud.png";
import LightRain from "../img/LightRain.png";
import Showers from "../img/Shower.png";
import Sleet from "../img/Sleet.png";
import Snow from "../img/Snow.png";
import Thunderstorm from "../img/Thunderstorm.png";
import styled from "styled-components";

const WeatherImage = styled.img`
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media (max-width: 960px) {
    width: 7vw;
    height: 7vh;
  }

  @media (max-width: 600px) {
    width: 15vw;
    height: 10vh;
  }
`;

const hashmap = {
  sn: Snow,
  sl: Sleet,
  h: Hail,
  t: Thunderstorm,
  hr: HeavyRain,
  lr: LightRain,
  s: Showers,
  hc: HeavyCloud,
  lc: LightCloud,
  c: Clear,
};

const ImageGenerator = ({ code, marginTop, width, height }) => {
  return (
    <WeatherImage
      src={hashmap[code]}
      alt=""
      marginTop={marginTop}
      width={width}
      height={height}
    />
  );
};

export default ImageGenerator;
