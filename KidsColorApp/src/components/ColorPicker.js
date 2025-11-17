import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../utils/colors';

export const ColorPicker = ({ selectedColor, onColorSelect }) => {
  return (
    <View style={styles.container}>
      {COLORS.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.colorButton,
            { backgroundColor: color },
            selectedColor === color && styles.selectedColor,
          ]}
          onPress={() => onColorSelect(color)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  colorButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    borderWidth: 2,
    borderColor: '#666',
  },
  selectedColor: {
    borderWidth: 5,
    borderColor: '#000',
    transform: [{ scale: 1.1 }],
  },
});
