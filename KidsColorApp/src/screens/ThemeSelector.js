import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { THEMES } from '../data/themes';
import { SVG_COMPONENTS } from '../data/svgs';

export const ThemeSelector = ({ onSelectImage, onBack }) => {
  const [selectedTheme, setSelectedTheme] = React.useState(null);

  if (!selectedTheme) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>← Retour</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Choisis un thème</Text>
        </View>

        <ScrollView contentContainerStyle={styles.themesContainer}>
          {THEMES.map((theme) => (
            <TouchableOpacity
              key={theme.id}
              style={styles.themeButton}
              onPress={() => setSelectedTheme(theme)}
            >
              <Text style={styles.themeEmoji}>{theme.icon}</Text>
              <Text style={styles.themeText}>{theme.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedTheme(null)}
        >
          <Text style={styles.backButtonText}>← Thèmes</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{selectedTheme.name}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.imagesContainer}>
        {selectedTheme.images.map((image) => {
          const SVGComponent = SVG_COMPONENTS[image.file];
          return (
            <TouchableOpacity
              key={image.id}
              style={styles.imageButton}
              onPress={() => onSelectImage(image.file)}
            >
              <View style={styles.imagePreview}>
                {SVGComponent && <SVGComponent width={120} height={120} />}
              </View>
              <Text style={styles.imageText}>{image.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFD93D',
    borderBottomWidth: 3,
    borderBottomColor: '#FFA500',
  },
  backButton: {
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFA500',
  },
  backButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6B6B',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF6B6B',
    marginLeft: 20,
    flex: 1,
  },
  themesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-around',
  },
  themeButton: {
    width: 150,
    height: 150,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#4ECDC4',
  },
  themeEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  themeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    justifyContent: 'space-around',
  },
  imageButton: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    padding: 10,
    borderWidth: 3,
    borderColor: '#6BCB77',
  },
  imagePreview: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
