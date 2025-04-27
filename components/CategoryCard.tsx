import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ImageBackground, View } from 'react-native';
import { ServiceCategory } from '@/utils/types';
import { getCategoryColor } from '@/utils/colors';
import { Chrome as Home, Droplet, Zap, BookOpen, Flower, Hammer } from 'lucide-react-native';

interface CategoryCardProps {
  category: ServiceCategory;
  onPress: (category: ServiceCategory) => void;
}

export default function CategoryCard({ category, onPress }: CategoryCardProps) {
  const getIcon = () => {
    switch (category.icon) {
      case 'droplet':
        return <Droplet size={24} color="#FFFFFF" />;
      case 'zap':
        return <Zap size={24} color="#FFFFFF" />;
      case 'spray-can':
        return <Home size={24} color="#FFFFFF" />;
      case 'book-open':
        return <BookOpen size={24} color="#FFFFFF" />;
      case 'flower':
        return <Flower size={24} color="#FFFFFF" />;
      case 'hammer':
        return <Hammer size={24} color="#FFFFFF" />;
      default:
        return <Home size={24} color="#FFFFFF" />;
    }
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(category)}
      activeOpacity={0.8}
    >
      <ImageBackground
        source={{ uri: category.image }}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={[styles.overlay, { backgroundColor: `${getCategoryColor(category.color)}CC` }]}>
          <View style={styles.iconContainer}>
            {getIcon()}
          </View>
          <Text style={styles.name}>{category.name}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    borderRadius: 12,
  },
  overlay: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});