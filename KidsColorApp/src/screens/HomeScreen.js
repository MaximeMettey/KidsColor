import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export const HomeScreen = ({ onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎨 Kids Color 🎨</Text>
      <Text style={styles.subtitle}>Choisis ton activité !</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.coloringButton]}
          onPress={() => onNavigate('coloring')}
        >
          <Text style={styles.buttonEmoji}>🖍️</Text>
          <Text style={styles.buttonText}>Coloriage</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.freeDrawButton]}
          onPress={() => onNavigate('freeDraw')}
        >
          <Text style={styles.buttonEmoji}>✨</Text>
          <Text style={styles.buttonText}>Dessin Libre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5B4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF6B6B',
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 50,
    color: '#4ECDC4',
    fontWeight: 'bold',
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 600,
  },
  button: {
    padding: 30,
    borderRadius: 20,
    marginVertical: 15,
    alignItems: 'center',
    borderWidth: 4,
  },
  coloringButton: {
    backgroundColor: '#FFD93D',
    borderColor: '#FFA500',
  },
  freeDrawButton: {
    backgroundColor: '#6BCB77',
    borderColor: '#4D96A9',
  },
  buttonEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
