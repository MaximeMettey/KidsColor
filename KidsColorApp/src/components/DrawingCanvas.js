import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path, Circle, G, Rect } from 'react-native-svg';
import { SVG_COMPONENTS } from '../data/svgs';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const DrawingCanvas = ({
  selectedColor,
  selectedTool,
  backgroundImage,
  paths: externalPaths,
  onPathsChange
}) => {
  const [paths, setPaths] = useState(externalPaths || []);
  const [currentPath, setCurrentPath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  // Synchroniser avec les paths externes (pour le clear et undo)
  useEffect(() => {
    if (externalPaths !== undefined) {
      setPaths(externalPaths);
    }
  }, [externalPaths]);

  // Notifier le parent quand paths change
  useEffect(() => {
    if (onPathsChange) {
      onPathsChange(paths);
    }
  }, [paths]);

  const handleTouchStart = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    if (selectedTool === 'bucket') {
      return;
    }

    setIsDrawing(true);
    setCurrentPath([{ x: locationX, y: locationY }]);
  };

  const handleTouchMove = (event) => {
    if (!isDrawing) return;

    const { locationX, locationY } = event.nativeEvent;
    setCurrentPath(prev => [...prev, { x: locationX, y: locationY }]);
  };

  const handleTouchEnd = () => {
    if (!isDrawing) return;

    if (currentPath.length > 0) {
      const newPath = {
        id: Date.now() + Math.random(),
        tool: selectedTool,
        color: selectedColor,
        points: currentPath,
      };

      setPaths(prev => [...prev, newPath]);
    }

    setCurrentPath([]);
    setIsDrawing(false);
  };

  const renderPath = (path, isTemp = false) => {
    if (!path || !path.points || path.points.length === 0) return null;

    const { tool, color, points, id } = path;
    const pathColor = tool === 'eraser' ? '#FFFFFF' : color;

    let strokeWidth = 3;
    if (tool === 'brush') strokeWidth = 10;
    if (tool === 'spray') strokeWidth = 2;
    if (tool === 'eraser') strokeWidth = 20;
    if (tool === 'pencil') strokeWidth = 3;

    if (tool === 'stamp') {
      return points.map((point, index) => (
        <Circle
          key={`${id || 'temp'}-stamp-${index}`}
          cx={point.x}
          cy={point.y}
          r={15}
          fill={pathColor}
          opacity={0.7}
        />
      ));
    }

    if (tool === 'spray') {
      const allSprayPoints = [];
      points.forEach((point, pointIndex) => {
        for (let i = 0; i < 5; i++) {
          const offsetX = (Math.random() - 0.5) * 20;
          const offsetY = (Math.random() - 0.5) * 20;
          allSprayPoints.push(
            <Circle
              key={`${id || 'temp'}-spray-${pointIndex}-${i}`}
              cx={point.x + offsetX}
              cy={point.y + offsetY}
              r={2}
              fill={pathColor}
              opacity={0.5}
            />
          );
        }
      });
      return allSprayPoints;
    }

    // Pour crayon, pinceau et gomme
    if (points.length === 1) {
      // Si un seul point, dessiner un cercle
      return (
        <Circle
          key={id || 'temp'}
          cx={points[0].x}
          cy={points[0].y}
          r={strokeWidth / 2}
          fill={pathColor}
        />
      );
    }

    const pathData = points.reduce((acc, point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `${acc} L ${point.x} ${point.y}`;
    }, '');

    return (
      <Path
        key={id || 'temp'}
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
  const canvasHeight = screenHeight * 0.6;

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={handleTouchStart}
      onResponderMove={handleTouchMove}
      onResponderRelease={handleTouchEnd}
    >
      <Svg width={screenWidth} height={canvasHeight}>
        {/* Fond blanc pour capturer les touches */}
        <Rect x={0} y={0} width={screenWidth} height={canvasHeight} fill="white" />

        {/* Image de fond */}
        {BackgroundSVG && (
          <G>
            <BackgroundSVG width={screenWidth} height={canvasHeight} />
          </G>
        )}

        {/* Afficher tous les chemins enregistrés */}
        {paths.map(path => renderPath(path, false))}

        {/* Afficher le chemin en cours */}
        {currentPath.length > 0 && renderPath({
          id: 'current',
          tool: selectedTool,
          color: selectedColor,
          points: currentPath
        }, true)}
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
