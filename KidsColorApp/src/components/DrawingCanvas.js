import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Canvas, Path, Circle, useCanvasRef, Image as SkiaImage, Skia } from '@shopify/react-native-skia';
import { SVG_STRINGS } from '../data/svgs/svgStrings';
import { floodFill, hexToRgba } from '../utils/floodFill';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const DrawingCanvas = ({
  selectedColor,
  selectedTool,
  backgroundImage,
  paths: externalPaths,
  onPathsChange
}) => {
  const canvasRef = useCanvasRef();
  const [paths, setPaths] = useState(externalPaths || []);
  const [currentPath, setCurrentPath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [baseImage, setBaseImage] = useState(null); // Image de base : SVG + flood fills

  const canvasHeight = screenHeight * 0.6;

  // Charger le SVG pour Skia et créer l'image de base
  useEffect(() => {
    if (backgroundImage && SVG_STRINGS[backgroundImage]) {
      try {
        const svgString = SVG_STRINGS[backgroundImage];
        const skSvg = Skia.SVG.MakeFromString(svgString);

        if (skSvg) {
          // Créer une surface pour rasteriser le SVG
          const surface = Skia.Surface.Make(Math.floor(screenWidth), Math.floor(canvasHeight));
          if (surface) {
            const canvas = surface.getCanvas();

            // Fond blanc
            canvas.clear(Skia.Color('white'));

            // Dessiner le SVG sur la surface
            const svgWidth = 300;
            const svgHeight = 300;
            const scaleX = screenWidth / svgWidth;
            const scaleY = canvasHeight / svgHeight;
            const scale = Math.min(scaleX, scaleY);

            // Centrer le SVG
            const offsetX = (screenWidth - svgWidth * scale) / 2;
            const offsetY = (canvasHeight - svgHeight * scale) / 2;

            canvas.save();
            canvas.translate(offsetX, offsetY);
            canvas.scale(scale, scale);
            skSvg.render(canvas);
            canvas.restore();

            // Créer une image à partir de la surface
            const image = surface.makeImageSnapshot();
            setBaseImage(image);
          }
        }
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    } else {
      setBaseImage(null);
    }
  }, [backgroundImage, screenWidth, canvasHeight]);

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

  // Créer un path Skia à partir de points
  const createSkiaPath = (points) => {
    if (!points || points.length === 0) return null;

    const path = Skia.Path.Make();
    path.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < points.length; i++) {
      path.lineTo(points[i].x, points[i].y);
    }

    return path;
  };

  // Rendre un path individuel
  const renderPath = (path, key) => {
    if (!path || !path.points || path.points.length === 0) return null;

    const { tool, color, points } = path;
    const pathColor = tool === 'eraser' ? '#FFFFFF' : color;

    let strokeWidth = 3;
    if (tool === 'brush') strokeWidth = 10;
    if (tool === 'spray') strokeWidth = 2;
    if (tool === 'eraser') strokeWidth = 20;
    if (tool === 'pencil') strokeWidth = 3;

    // Bucket tool est géré séparément via fillImage
    if (tool === 'bucket') {
      return null;
    }

    // Stamp tool
    if (tool === 'stamp') {
      return points.map((point, index) => (
        <Circle
          key={`${key}-stamp-${index}`}
          cx={point.x}
          cy={point.y}
          r={15}
          color={pathColor}
          opacity={0.7}
        />
      ));
    }

    // Spray tool
    if (tool === 'spray' && path.sprayPoints) {
      return path.sprayPoints.map((point, index) => (
        <Circle
          key={`${key}-spray-${index}`}
          cx={point.x}
          cy={point.y}
          r={2}
          color={pathColor}
          opacity={0.5}
        />
      ));
    }

    // Brush, pencil, eraser
    if (points.length === 1) {
      return (
        <Circle
          key={key}
          cx={points[0].x}
          cy={points[0].y}
          r={strokeWidth / 2}
          color={pathColor}
        />
      );
    }

    const skiaPath = createSkiaPath(points);
    if (!skiaPath) return null;

    return (
      <Path
        key={key}
        path={skiaPath}
        color={pathColor}
        style="stroke"
        strokeWidth={strokeWidth}
        strokeCap="round"
        strokeJoin="round"
      />
    );
  };

  const performFloodFill = useCallback(async (x, y) => {
    if (!canvasRef.current) return;

    try {
      // Capturer l'état actuel du canvas (baseImage + tous les dessins)
      const snapshot = canvasRef.current.makeImageSnapshot();
      if (!snapshot) return;

      // Lire les pixels
      const pixels = snapshot.readPixels(0, 0);
      if (!pixels) return;

      const width = snapshot.width();
      const height = snapshot.height();

      // Convertir la couleur de remplissage
      const fillColor = hexToRgba(selectedColor);

      // Appliquer le flood fill
      const filledPixels = floodFill(
        pixels,
        width,
        height,
        Math.floor(x),
        Math.floor(y),
        fillColor,
        1 // tolérance
      );

      // Créer une nouvelle image avec les pixels modifiés
      const newImage = Skia.Image.MakeImage({
        width,
        height,
        alphaType: 'unpremul',
        colorType: 'rgba_8888',
      }, filledPixels, width * 4);

      if (newImage) {
        // La nouvelle baseImage contient tout : SVG original + tous les dessins + le nouveau flood fill
        setBaseImage(newImage);

        // Nettoyer les paths de dessin car ils sont maintenant intégrés dans baseImage
        setPaths([]);
      }
    } catch (error) {
      console.error('Flood fill error:', error);
    }
  }, [canvasRef, selectedColor]);

  const handleTouchStart = (event) => {
    const { x, y } = event.nativeEvent;

    if (selectedTool === 'bucket') {
      performFloodFill(x, y);
      return;
    }

    setIsDrawing(true);
    setCurrentPath([{ x, y }]);
  };

  const handleTouchMove = (event) => {
    if (!isDrawing) return;

    const { x, y } = event.nativeEvent;
    setCurrentPath(prev => [...prev, { x, y }]);
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

      // Pour le spray, pré-calculer les positions des grains
      if (selectedTool === 'spray') {
        const sprayPoints = [];
        currentPath.forEach((point) => {
          for (let i = 0; i < 5; i++) {
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            sprayPoints.push({
              x: point.x + offsetX,
              y: point.y + offsetY,
            });
          }
        });
        newPath.sprayPoints = sprayPoints;
      }

      setPaths(prev => [...prev, newPath]);
    }

    setCurrentPath([]);
    setIsDrawing(false);
  };

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={handleTouchStart}
      onResponderMove={handleTouchMove}
      onResponderRelease={handleTouchEnd}
    >
      <Canvas
        ref={canvasRef}
        style={{ width: screenWidth, height: canvasHeight }}
      >
        {/* Fond blanc si pas d'image de base */}
        {!baseImage && (
          <Circle
            cx={screenWidth / 2}
            cy={canvasHeight / 2}
            r={Math.max(screenWidth, canvasHeight)}
            color="white"
          />
        )}

        {/* Image de base (SVG + flood fills) */}
        {baseImage && (
          <SkiaImage
            image={baseImage}
            x={0}
            y={0}
            width={screenWidth}
            height={canvasHeight}
            fit="fill"
          />
        )}

        {/* Afficher tous les chemins enregistrés */}
        {paths.map((path, index) => renderPath(path, `path-${index}`))}

        {/* Afficher le chemin en cours */}
        {currentPath.length > 0 && renderPath({
          id: 'current',
          tool: selectedTool,
          color: selectedColor,
          points: currentPath,
          sprayPoints: selectedTool === 'spray' ? currentPath.flatMap(point => {
            const sprays = [];
            for (let i = 0; i < 5; i++) {
              sprays.push({
                x: point.x + (Math.random() - 0.5) * 20,
                y: point.y + (Math.random() - 0.5) * 20,
              });
            }
            return sprays;
          }) : undefined
        }, 'current')}
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
