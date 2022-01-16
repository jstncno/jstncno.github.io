import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
  background: hsla(352, 83%, 64%, 1);
  background: linear-gradient(90deg, hsla(352, 83%, 64%, 1) 0%, hsla(230, 90%, 68%, 1) 100%);
  background: -moz-linear-gradient(90deg, hsla(352, 83%, 64%, 1) 0%, hsla(230, 90%, 68%, 1) 100%);
  background: -webkit-linear-gradient(90deg, hsla(352, 83%, 64%, 1) 0%, hsla(230, 90%, 68%, 1) 100%);
  color: transparent;
  font-family: 'Fredoka One', sans-serif;
  font-size: 20vmin;
  font-weight: bolder;
  -webkit-background-clip: text;
`;


export interface HelloGradientProps {}

export default function HelloGradient() {
  return <H1>hello!</H1>;
}
