import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Canvas from 'react-native-canvas';
import floodfill from 'q-floodfill';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export const DrawingCanvas = ({
  selectedColor,
  selectedTool,
  backgroundImage,
  paths: externalPaths,
  onPathsChange
}) => {
  const canvasRef = useRef(null);
  const [paths, setPaths] = useState(externalPaths || []);
  const [currentPath, setCurrentPath] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);
  const contextRef = useRef(null);

  const canvasHeight = screenHeight * 0.6;

  // Synchroniser avec les paths externes (pour le clear et undo)
  useEffect(() => {
    if (externalPaths !== undefined) {
      setPaths(externalPaths);
      if (canvasReady) {
        redrawCanvas();
      }
    }
  }, [externalPaths, canvasReady]);

  // Notifier le parent quand paths change
  useEffect(() => {
    if (onPathsChange) {
      onPathsChange(paths);
    }
  }, [paths]);

  // Redessiner tout le canvas
  const redrawCanvas = () => {
    if (!canvasRef.current || !contextRef.current) return;

    const ctx = contextRef.current;
    const canvas = canvasRef.current;

    // Effacer le canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dessiner le fond blanc
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // TODO: Dessiner l'image de fond SVG si présente
    // Pour l'instant, on garde le fond blanc

    // Dessiner tous les paths sauvegardés dans l'ordre
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];

      if (path.tool === 'bucket') {
        // Pour le bucket, réappliquer le flood fill
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const fillColor = hexToRgb(path.color);
        const result = floodfill(imageData, Math.floor(path.points[0].x), Math.floor(path.points[0].y), fillColor);
        ctx.putImageData(result, 0, 0);
      } else {
        drawPath(ctx, path);
      }
    }
  };

  const handleCanvas = (canvas) => {
    if (!canvas) return;

    canvas.width = screenWidth;
    canvas.height = canvasHeight;
    canvasRef.current = canvas;

    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;

    // Fond blanc
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setCanvasReady(true);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
      a: 255
    } : { r: 0, g: 0, b: 0, a: 255 };
  };

  const performFloodFill = async (x, y, color) => {
    if (!canvasRef.current || !contextRef.current) return;

    const canvas = canvasRef.current;
    const ctx = contextRef.current;

    try {
      // Obtenir les données d'image actuelles
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Convertir la couleur hex en RGBA
      const fillColor = hexToRgb(color);

      // Appliquer le flood fill
      const result = floodfill(imageData, Math.floor(x), Math.floor(y), fillColor);

      // Remettre les données modifiées sur le canvas
      ctx.putImageData(result, 0, 0);

      // Sauvegarder cette action comme un "path" pour l'undo
      const fillPath = {
        id: Date.now() + Math.random(),
        tool: 'bucket',
        color: color,
        points: [{ x, y }]
      };

      setPaths(prev => [...prev, fillPath]);
    } catch (error) {
      console.error('Flood fill error:', error);
    }
  };

  const drawPath = (ctx, path) => {
    if (!path || !path.points || path.points.length === 0) return;

    const { tool, color, points } = path;
    const pathColor = tool === 'eraser' ? '#FFFFFF' : color;

    // Le bucket est géré séparément dans redrawCanvas
    if (tool === 'bucket') {
      return;
    }

    ctx.strokeStyle = pathColor;
    ctx.fillStyle = pathColor;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    let lineWidth = 3;
    if (tool === 'brush') lineWidth = 10;
    if (tool === 'spray') lineWidth = 2;
    if (tool === 'eraser') lineWidth = 20;
    if (tool === 'pencil') lineWidth = 3;

    ctx.lineWidth = lineWidth;

    if (tool === 'stamp') {
      points.forEach(point => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 15, 0, Math.PI * 2);
        ctx.globalAlpha = 0.7;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });
      return;
    }

    if (tool === 'spray') {
      if (path.sprayPoints) {
        ctx.globalAlpha = 0.5;
        path.sprayPoints.forEach(point => {
          ctx.beginPath();
          ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
        ctx.globalAlpha = 1.0;
      }
      return;
    }

    // Pour crayon, pinceau et gomme
    if (points.length === 1) {
      ctx.beginPath();
      ctx.arc(points[0].x, points[0].y, lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
      return;
    }

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }
    ctx.stroke();
  };

  const handleTouchStart = (event) => {
    if (!canvasReady) return;

    const { locationX, locationY } = event.nativeEvent;

    if (selectedTool === 'bucket') {
      performFloodFill(locationX, locationY, selectedColor);
      return;
    }

    setIsDrawing(true);
    setCurrentPath([{ x: locationX, y: locationY }]);
  };

  const handleTouchMove = (event) => {
    if (!isDrawing || !canvasReady) return;

    const { locationX, locationY } = event.nativeEvent;
    const newPath = [...currentPath, { x: locationX, y: locationY }];
    setCurrentPath(newPath);

    // Dessiner en temps réel
    if (contextRef.current) {
      const tempPath = {
        tool: selectedTool,
        color: selectedColor,
        points: newPath
      };

      // Redessiner tout
      redrawCanvas();
      // Dessiner le path en cours
      drawPath(contextRef.current, tempPath);
    }
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
      redrawCanvas();
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
        ref={handleCanvas}
        style={{ width: screenWidth, height: canvasHeight }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
