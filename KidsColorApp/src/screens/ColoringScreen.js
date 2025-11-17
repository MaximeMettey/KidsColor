import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { DrawingCanvas } from '../components/DrawingCanvas';
import { ColorPicker } from '../components/ColorPicker';
import { ToolBar } from '../components/ToolBar';
import { ThemeSelector } from './ThemeSelector';

export const ColoringScreen = ({ onBack }) => {
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [selectedTool, setSelectedTool] = useState('brush');
  const [selectedImage, setSelectedImage] = useState(null);
  const [paths, setPaths] = useState([]);

  const handleUndo = () => {
    if (paths.length > 0) {
      setPaths(paths.slice(0, -1));
    }
  };

  const handleClear = () => {
    setPaths([]);
  };

  const handleImageSelect = (imageFile) => {
    setSelectedImage(imageFile);
    setPaths([]);
  };

  if (!selectedImage) {
    return <ThemeSelector onSelectImage={handleImageSelect} onBack={onBack} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => setSelectedImage(null)}>
          <Text style={styles.backButtonText}>← Images</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>🗑️ Effacer</Text>
        </TouchableOpacity>
      </View>

      <DrawingCanvas
        selectedColor={selectedColor}
        selectedTool={selectedTool}
        backgroundImage={selectedImage}
        onPathsChange={setPaths}
      />

      <ToolBar
        selectedTool={selectedTool}
        onToolSelect={setSelectedTool}
        onUndo={handleUndo}
      />

      <ColorPicker
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFD93D',
    borderBottomWidth: 2,
    borderBottomColor: '#FFA500',
  },
  backButton: {
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  clearButton: {
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E74C3C',
  },
  clearButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E74C3C',
  },
});
