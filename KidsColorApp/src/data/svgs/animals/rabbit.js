import React from 'react';
import { Svg, Path, Circle, Ellipse } from 'react-native-svg';

export const RabbitSVG = ({ width = 300, height = 300 }) => (
  <Svg width={width} height={height} viewBox="0 0 300 300">
    {/* Oreille gauche */}
    <Ellipse cx="110" cy="70" rx="20" ry="60" fill="white" stroke="black" strokeWidth="4" />
    {/* Oreille droite */}
    <Ellipse cx="190" cy="70" rx="20" ry="60" fill="white" stroke="black" strokeWidth="4" />
    {/* Tête */}
    <Circle cx="150" cy="140" r="65" fill="white" stroke="black" strokeWidth="4" />
    {/* Œil gauche */}
    <Circle cx="130" cy="130" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Œil droit */}
    <Circle cx="170" cy="130" r="10" fill="white" stroke="black" strokeWidth="3" />
    {/* Nez */}
    <Ellipse cx="150" cy="155" rx="8" ry="6" fill="white" stroke="black" strokeWidth="3" />
    {/* Bouche */}
    <Path d="M 150 161 L 150 170" stroke="black" strokeWidth="3" />
    <Path d="M 150 170 Q 140 175 135 172" fill="none" stroke="black" strokeWidth="3" />
    <Path d="M 150 170 Q 160 175 165 172" fill="none" stroke="black" strokeWidth="3" />
    {/* Moustaches gauche */}
    <Path d="M 90 145 L 50 140" stroke="black" strokeWidth="2" />
    <Path d="M 90 155 L 50 155" stroke="black" strokeWidth="2" />
    {/* Moustaches droite */}
    <Path d="M 210 145 L 250 140" stroke="black" strokeWidth="2" />
    <Path d="M 210 155 L 250 155" stroke="black" strokeWidth="2" />
    {/* Corps */}
    <Ellipse cx="150" cy="240" rx="60" ry="50" fill="white" stroke="black" strokeWidth="4" />
    {/* Queue */}
    <Circle cx="210" cy="255" r="18" fill="white" stroke="black" strokeWidth="3" />
  </Svg>
);
