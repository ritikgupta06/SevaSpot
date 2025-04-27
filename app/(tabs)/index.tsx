import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { ArrowRight } from 'lucide-react-native';
import { colors } from '@/utils/colors';
import { categories, providers, currentUser, mockBookings } from '@/utils/data';
import { ServiceCategory, ServiceProvider } from '@/utils/types';
import SearchBar from '@/components/common/SearchBar';
import CategoryCard from '@/components/CategoryCard';
import ProviderCard from '@/components/ProviderCard';
import HeaderBar from '@/components/common/HeaderBar';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  
  const topProviders = providers.slice(0, 3);
  const upcomingBooking = mockBookings.find(booking => 
    booking.status === 'confirmed' || booking.status === 'pending'
  );
  
  const relatedProvider = upcomingBooking 
    ? providers.find(p => p.id === upcomingBooking.providerId) 
    : null;

  const handleCategoryPress = (category: ServiceCategory) => {
    // Navigate to category details or filtered providers
    console.log('Category pressed:', category.name);
  };

  const handleProviderPress = (provider: ServiceProvider) => {
    // Navigate to provider details
    console.log('Provider pressed:', provider.name);
  };

  const handleBookPress = (provider: ServiceProvider) => {
    // Navigate to booking screen
    console.log('Book pressed for:', provider.name);
  };

  return (
    <View style={styles.container}>
      <HeaderBar 
        title="ServiceHub" 
        showNotifications
      />
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>
            Hello, <Text style={styles.userName}>{currentUser.name.split(' ')[0]}</Text>
          </Text>
          <Text style={styles.subTitle}>What service do you need today?</Text>
        </View>
        
        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onClear={() => setSearchQuery('')}
        />
        
        {/* Upcoming Booking */}
        {upcomingBooking && relatedProvider && (
          <View style={styles.upcomingBookingSection}>
            <Text style={styles.sectionTitle}>Upcoming Booking</Text>
            <TouchableOpacity
              style={styles.upcomingBookingCard}
              activeOpacity={0.8}
            >
              <View style={styles.upcomingBookingContent}>
                <View>
                  <Text style={styles.bookingTitle}>{upcomingBooking.serviceType}</Text>
                  <Text style={styles.bookingProvider}>with {relatedProvider.name}</Text>
                  <Text style={styles.bookingTime}>
                    {new Date(upcomingBooking.date).toLocaleDateString()} • {upcomingBooking.timeSlot}
                  </Text>
                </View>
                <View style={styles.bookingStatusContainer}>
                  <Text style={styles.bookingStatus}>
                    {upcomingBooking.status.charAt(0).toUpperCase() + upcomingBooking.status.slice(1)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
        
        {/* Categories Section */}
        <View style={styles.categoriesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Categories</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <ArrowRight size={16} color={colors.primary.main} />
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onPress={handleCategoryPress}
              />
            ))}
          </ScrollView>
        </View>
        
        {/* Featured Banner */}
        <TouchableOpacity activeOpacity={0.9}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/8005399/pexels-photo-8005399.jpeg' }}
            style={styles.featuredBanner}
            imageStyle={styles.featuredBannerImage}
          >
            <View style={styles.featuredBannerOverlay}>
              <Text style={styles.featuredBannerText}>
                25% OFF on your first service booking!
              </Text>
              <Text style={styles.featuredBannerSubtext}>
                Use code: FIRST25
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        
        {/* Top Rated Providers */}
        <View style={styles.providersSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Rated Providers</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See All</Text>
              <ArrowRight size={16} color={colors.primary.main} />
            </TouchableOpacity>
          </View>
          {topProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onPress={handleProviderPress}
              onBook={handleBookPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  welcomeSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.text.secondary,
  },
  userName: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.text.primary,
  },
  subTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 4,
  },
  upcomingBookingSection: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  upcomingBookingCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  upcomingBookingContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookingTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 2,
  },
  bookingProvider: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  bookingTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
  bookingStatusContainer: {
    backgroundColor: `${colors.primary.main}20`,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  bookingStatus: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.primary.main,
  },
  categoriesSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary.main,
    marginRight: 4,
  },
  categoriesList: {
    paddingRight: 16,
  },
  featuredBanner: {
    height: 120,
    marginTop: 24,
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  featuredBannerImage: {
    borderRadius: 16,
  },
  featuredBannerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 16,
    justifyContent: 'center',
  },
  featuredBannerText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  featuredBannerSubtext: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: '#FFFFFF',
  },
  providersSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
});