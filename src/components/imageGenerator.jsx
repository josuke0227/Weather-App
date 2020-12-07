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

// name : w x h
// formula : w / h
// portrait : result < 0
// landscape: result > 0

// thunder-storm: 203 x 235 / 0.86
// heavy-rain: 203 x 234 / 0.86
// light-rain: 203 x 234 / 0.86
// shower: 202 x 234 / 0.86
// sleet: 202 x 227 / 0.88

// hail: 180 x 200 / 0.9

// clear : 213 x 206 / 1.03 / 45vw, 35vh
// light-cloud: 221 x 206 / 1.07

// snow: 203 x 169 / 1.201 / 45vw, 35vh
// heavy-cloud: 203 x 150 / 1.353... / 45vw, 35vh

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
      // src={hashmap[code]}
      src={hashmap.sn}
      alt=""
      marginTop={marginTop}
      width={width}
      height={height}
    />
  );
};

export default ImageGenerator;
