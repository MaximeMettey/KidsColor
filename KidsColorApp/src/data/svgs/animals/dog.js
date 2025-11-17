import React from 'react';
import { Svg, Path, Circle, Ellipse } from 'react-native-svg';

export const DogSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Oreille gauche */}
    <Ellipse cx="90" cy="100" rx="25" ry="45" fill="white" stroke="black" strokeWidth="4" />
    {/* Oreille droite */}
    <Ellipse cx="210" cy="100" rx="25" ry="45" fill="white" stroke="black" strokeWidth="4" />
    {/* Tête */}
    <Circle cx="150" cy="120" r="70" fill="white" stroke="black" strokeWidth="4" />
    {/* Museau */}
    <Ellipse cx="150" cy="150" rx="40" ry="30" fill="white" stroke="black" strokeWidth="4" />
    {/* Œil gauche */}
    <Circle cx="130" cy="110" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Œil droit */}
    <Circle cx="170" cy="110" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Nez */}
    <Circle cx="150" cy="145" r="8" fill="black" />
    {/* Bouche */}
    <Path d="M 150 153 L 150 165" stroke="black" strokeWidth="3" />
    <Path d="M 150 165 Q 140 170 135 165" fill="none" stroke="black" strokeWidth="3" />
    <Path d="M 150 165 Q 160 170 165 165" fill="none" stroke="black" strokeWidth="3" />
    {/* Corps */}
    <Ellipse cx="150" cy="230" rx="65" ry="55" fill="white" stroke="black" strokeWidth="4" />
  </Svg>
);
