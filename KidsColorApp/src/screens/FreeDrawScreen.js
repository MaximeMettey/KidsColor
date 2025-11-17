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

export const FreeDrawScreen = ({ onBack }) => {
  const [selectedColor, setSelectedColor] = useState('#FF0000');
  const [selectedTool, setSelectedTool] = useState('brush');
  const [paths, setPaths] = useState([]);

  const handleUndo = () => {
    if (paths.length > 0) {
      setPaths(paths.slice(0, -1));
    }
  };

  const handleClear = () => {
    setPaths([]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backButtonText}>← Menu</Text>
        </TouchableOpacity>
        <Text style={styles.title}>✨ Dessin Libre ✨</Text>
        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <Text style={styles.clearButtonText}>🗑️ Effacer</Text>
        </TouchableOpacity>
      </View>

      <DrawingCanvas
        selectedColor={selectedColor}
        selectedTool={selectedTool}
        backgroundImage={null}
        paths={paths}
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
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#6BCB77',
    borderBottomWidth: 2,
    borderColor: '#4D96A9',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
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
