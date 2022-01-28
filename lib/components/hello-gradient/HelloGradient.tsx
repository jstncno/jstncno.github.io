import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

  background: linear-gradient(
    30deg,
    rgba(255,0,0,1) 0%,
    rgba(255,154,0,1) 15%,
    rgba(208,222,33,1) 25%,
    rgba(79,220,74,1) 35%,
    rgba(63,218,216,1) 45%,
    rgba(47,201,226,1) 50%,
    rgba(28,127,238,1) 60%,
    rgba(95,21,242,1) 70%,
    rgba(186,12,248,1) 80%,
    rgba(251,7,217,1) 90%,
    rgba(255,0,0,1) 100%
  );
  background: -moz-linear-gradient(
    30deg,
    rgba(255,0,0,1) 0%,
    rgba(255,154,0,1) 15%,
    rgba(208,222,33,1) 25%,
    rgba(79,220,74,1) 35%,
    rgba(63,218,216,1) 45%,
    rgba(47,201,226,1) 50%,
    rgba(28,127,238,1) 60%,
    rgba(95,21,242,1) 70%,
    rgba(186,12,248,1) 80%,
    rgba(251,7,217,1) 90%,
    rgba(255,0,0,1) 100%
  );
  background: -webkit-linear-gradient(
    30deg,
    rgba(255,0,0,1) 0%,
    rgba(255,154,0,1) 15%,
    rgba(208,222,33,1) 25%,
    rgba(79,220,74,1) 35%,
    rgba(63,218,216,1) 45%,
    rgba(47,201,226,1) 50%,
    rgba(28,127,238,1) 60%,
    rgba(95,21,242,1) 70%,
    rgba(186,12,248,1) 80%,
    rgba(251,7,217,1) 90%,
    rgba(255,0,0,1) 100%
  );
  color: transparent;
  font-family: 'Archivo Black', sans-serif;
  font-size: 16vmin;
  font-weight: bolder;
  letter-spacing: -12px;
  margin: auto;
  -webkit-background-clip: text;
  -webkit-text-stroke-color: #222222;
  -webkit-text-stroke-width: 3px;
`;

export default function HelloGradient() {
  return (
    <div className="flex w-full">
      <H1>HELLO!</H1>
    </div>
  );
}
