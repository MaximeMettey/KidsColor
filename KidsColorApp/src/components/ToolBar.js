import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TOOLS = [
  { id: 'pencil', label: '✏️', name: 'Crayon' },
  { id: 'brush', label: '🖌️', name: 'Pinceau' },
  { id: 'bucket', label: '🪣', name: 'Pot' },
  { id: 'spray', label: '💨', name: 'Spray' },
  { id: 'stamp', label: '⭐', name: 'Tampon' },
  { id: 'eraser', label: '🧹', name: 'Gomme' },
  { id: 'undo', label: '↶', name: 'Annuler' },
];

export const ToolBar = ({ selectedTool, onToolSelect, onUndo }) => {
  const handleToolPress = (toolId) => {
    if (toolId === 'undo') {
      onUndo();
    } else {
      onToolSelect(toolId);
    }
  };

  return (
    <View style={styles.container}>
      {TOOLS.map((tool) => (
        <TouchableOpacity
          key={tool.id}
          style={[
            styles.toolButton,
            selectedTool === tool.id && styles.selectedTool,
          ]}
          onPress={() => handleToolPress(tool.id)}
        >
          <Text style={styles.toolIcon}>{tool.label}</Text>
          <Text style={styles.toolName}>{tool.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#e0e0e0',
    justifyContent: 'space-around',
  },
  toolButton: {
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    minWidth: 80,
    borderWidth: 2,
    borderColor: '#999',
  },
  selectedTool: {
    backgroundColor: '#a8d5ff',
    borderColor: '#0066cc',
    borderWidth: 3,
  },
  toolIcon: {
    fontSize: 32,
  },
  toolName: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
});
