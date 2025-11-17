import React, { useState, useRef } from 'react';
import { View, PanResponder, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, G } from 'react-native-svg';
import { SVG_COMPONENTS } from '../data/svgs';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const DrawingCanvas = ({
  selectedColor,
  selectedTool,
  backgroundImage,
  onPathsChange
}) => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState(null);
  const pathsRef = useRef([]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: (evt) => {
        const { locationX, locationY } = evt.nativeEvent;

        if (selectedTool === 'bucket') {
          // Pour le pot de peinture, on ne fait rien ici (à implémenter avec flood fill)
          return;
        }

        const newPath = {
          id: Date.now(),
          tool: selectedTool,
          color: selectedColor,
          points: [{ x: locationX, y: locationY }],
        };
        setCurrentPath(newPath);
      },

      onPanResponderMove: (evt) => {
        if (!currentPath) return;

        const { locationX, locationY } = evt.nativeEvent;

        setCurrentPath({
          ...currentPath,
          points: [...currentPath.points, { x: locationX, y: locationY }],
        });
      },

      onPanResponderRelease: () => {
        if (currentPath && currentPath.points.length > 0) {
          const newPaths = [...pathsRef.current, currentPath];
          pathsRef.current = newPaths;
          setPaths(newPaths);
          onPathsChange?.(newPaths);
        }
        setCurrentPath(null);
      },
    })
  ).current;

  const renderPath = (path) => {
    if (!path || !path.points || path.points.length === 0) return null;

    const { tool, color, points } = path;

    // Pour la gomme, utiliser du blanc
    const pathColor = tool === 'eraser' ? '#FFFFFF' : color;

    // Déterminer la taille selon l'outil
    let strokeWidth = 3;
    if (tool === 'brush') strokeWidth = 10;
    if (tool === 'spray') strokeWidth = 2;
    if (tool === 'eraser') strokeWidth = 20;

    if (tool === 'stamp') {
      // Afficher des étoiles/formes aux points
      return points.map((point, index) => (
        <Circle
          key={`${path.id}-${index}`}
          cx={point.x}
          cy={point.y}
          r={15}
          fill={pathColor}
          opacity={0.7}
        />
      ));
    }

    if (tool === 'spray') {
      // Effet spray avec plusieurs petits points
      return points.map((point, index) => {
        const sprayPoints = [];
        for (let i = 0; i < 5; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          sprayPoints.push(
            <Circle
              key={`${path.id}-${index}-${i}`}
              cx={point.x + offsetX}
              cy={point.y + offsetY}
              r={2}
              fill={pathColor}
              opacity={0.5}
            />
          );
        }
        return sprayPoints;
      });
    }

    // Pour crayon et pinceau, dessiner une ligne
    const pathData = points.reduce((acc, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `${acc} L ${point.x} ${point.y}`;
    }, '');

    return (
      <Path
        key={path.id}
        d={pathData}
        stroke={pathColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    );
  };

  const BackgroundSVG = backgroundImage ? SVG_COMPONENTS[backgroundImage] : null;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Svg width={screenWidth} height={screenHeight * 0.6}>
        {BackgroundSVG && (
          <G>
            <BackgroundSVG width={screenWidth} height={screenHeight * 0.6} />
          </G>
        )}

        {/* Afficher tous les chemins enregistrés */}
        {paths.map(renderPath)}

        {/* Afficher le chemin en cours */}
        {currentPath && renderPath(currentPath)}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
