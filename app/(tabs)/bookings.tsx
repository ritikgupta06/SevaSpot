import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { colors } from '@/utils/colors';
import { mockBookings, providers } from '@/utils/data';
import { Booking } from '@/utils/types';
import BookingCard from '@/components/BookingCard';
import HeaderBar from '@/components/common/HeaderBar';

type BookingFilter = 'all' | 'upcoming' | 'completed' | 'cancelled';

export default function BookingsScreen() {
  const [activeFilter, setActiveFilter] = useState<BookingFilter>('all');

  const filteredBookings = mockBookings.filter(booking => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'upcoming') return booking.status === 'confirmed' || booking.status === 'pending';
    return booking.status === activeFilter;
  });

  const getProviderInfo = (providerId: string) => {
    const provider = providers.find(p => p.id === providerId);
    return {
      name: provider?.name || 'Unknown Provider',
      profession: provider?.profession || 'Service Provider',
    };
  };

  const handleBookingPress = (booking: Booking) => {
    // Navigate to booking details
    console.log('Booking pressed:', booking.id);
  };

  const handleBookingCancel = (booking: Booking) => {
    // Handle booking cancellation
    console.log('Cancel booking:', booking.id);
  };

  return (
    <View style={styles.container}>
      <HeaderBar title="My Bookings" />
      
      <View style={styles.filtersContainer}>
        <View style={styles.filterTabs}>
          <FilterTab
            label="All"
            active={activeFilter === 'all'}
            onPress={() => setActiveFilter('all')}
          />
          <FilterTab
            label="Upcoming"
            active={activeFilter === 'upcoming'}
            onPress={() => setActiveFilter('upcoming')}
          />
          <FilterTab
            label="Completed"
            active={activeFilter === 'completed'}
            onPress={() => setActiveFilter('completed')}
          />
          <FilterTab
            label="Cancelled"
            active={activeFilter === 'cancelled'}
            onPress={() => setActiveFilter('cancelled')}
          />
        </View>
      </View>
      
      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { name, profession } = getProviderInfo(item.providerId);
          return (
            <BookingCard
              booking={item}
              providerName={name}
              providerProfession={profession}
              onPress={handleBookingPress}
              onCancel={handleBookingCancel}
            />
          );
        }}
        contentContainerStyle={styles.bookingsList}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>
              No bookings found
            </Text>
            <Text style={styles.emptyStateSubtext}>
              {activeFilter === 'all'
                ? "You haven't made any bookings yet."
                : `You don't have any ${activeFilter} bookings.`}
            </Text>
          </View>
        }
      />
    </View>
  );
}

interface FilterTabProps {
  label: string;
  active: boolean;
  onPress: () => void;
}

function FilterTab({ label, active, onPress }: FilterTabProps) {
  return (
    <View style={styles.filterTabContainer}>
      <Text
        style={[
          styles.filterTabText,
          active && styles.activeFilterTabText,
        ]}
        onPress={onPress}
      >
        {label}
      </Text>
      {active && <View style={styles.activeFilterIndicator} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
  },
  filtersContainer: {
    backgroundColor: colors.background.primary,
    paddingBottom: 8,
  },
  filterTabs: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  filterTabContainer: {
    marginRight: 24,
    paddingVertical: 12,
    position: 'relative',
  },
  filterTabText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.text.tertiary,
  },
  activeFilterTabText: {
    color: colors.primary.main,
  },
  activeFilterIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: colors.primary.main,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  bookingsList: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  emptyStateContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.tertiary,
    textAlign: 'center',
  },
});