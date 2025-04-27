import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ServiceProvider } from '@/utils/types';
import { colors } from '@/utils/colors';
import { Star, CircleCheck as CheckCircle, MapPin, Clock } from 'lucide-react-native';
import Button from './common/Button';

interface ProviderCardProps {
  provider: ServiceProvider;
  onPress: (provider: ServiceProvider) => void;
  onBook: (provider: ServiceProvider) => void;
}

export default function ProviderCard({ provider, onPress, onBook }: ProviderCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(provider)}
      activeOpacity={0.9}
    >
      <View style={styles.header}>
        <Image source={{ uri: provider.avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{provider.name}</Text>
            {provider.verified && (
              <CheckCircle size={16} color={colors.primary.main} style={styles.verifiedIcon} />
            )}
          </View>
          <Text style={styles.profession}>{provider.profession}</Text>
          <View style={styles.ratingContainer}>
            <Star size={16} color="#FFD700" fill="#FFD700" />
            <Text style={styles.rating}>{provider.rating}</Text>
            <Text style={styles.reviewCount}>({provider.reviewCount} reviews)</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detail}>
          <MapPin size={16} color={colors.neutral[600]} />
          <Text style={styles.detailText}>{provider.location}</Text>
        </View>
        <View style={styles.detail}>
          <Clock size={16} color={colors.neutral[600]} />
          <Text style={styles.detailText}>${provider.hourlyRate}/hr</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Book Now" 
          onPress={() => onBook(provider)} 
          size="small"
          style={styles.bookButton}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
  },
  headerInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
  },
  verifiedIcon: {
    marginLeft: 4,
  },
  profession: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.text.secondary,
    marginLeft: 4,
    marginRight: 2,
  },
  reviewCount: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
  detailsContainer: {
    marginBottom: 12,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  detailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    marginLeft: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bookButton: {
    borderRadius: 8,
  },
});