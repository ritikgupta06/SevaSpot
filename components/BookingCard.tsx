import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Booking } from '@/utils/types';
import { colors } from '@/utils/colors';
import { Calendar, Clock, DollarSign } from 'lucide-react-native';
import Button from './common/Button';

interface BookingCardProps {
  booking: Booking;
  providerName: string;
  providerProfession: string;
  onPress: (booking: Booking) => void;
  onCancel?: (booking: Booking) => void;
}

export default function BookingCard({ 
  booking, 
  providerName, 
  providerProfession, 
  onPress, 
  onCancel 
}: BookingCardProps) {
  const getStatusColor = () => {
    switch (booking.status) {
      case 'confirmed':
        return colors.primary.main;
      case 'pending':
        return colors.warning.main;
      case 'completed':
        return colors.success.main;
      case 'cancelled':
        return colors.error.main;
      default:
        return colors.neutral[600];
    }
  };

  const getStatusText = () => {
    switch (booking.status) {
      case 'confirmed':
        return 'Confirmed';
      case 'pending':
        return 'Pending';
      case 'completed':
        return 'Completed';
      case 'cancelled':
        return 'Cancelled';
      default:
        return booking.status;
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(booking)}
      activeOpacity={0.8}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.providerName}>{providerName}</Text>
          <Text style={styles.serviceType}>{booking.serviceType}</Text>
          <Text style={styles.providerProfession}>{providerProfession}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor()}20` }]}>
          <Text style={[styles.statusText, { color: getStatusColor() }]}>
            {getStatusText()}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Calendar size={16} color={colors.neutral[600]} style={styles.icon} />
          <Text style={styles.detailText}>{formatDate(booking.date)}</Text>
        </View>
        <View style={styles.detailRow}>
          <Clock size={16} color={colors.neutral[600]} style={styles.icon} />
          <Text style={styles.detailText}>{booking.timeSlot}</Text>
        </View>
        <View style={styles.detailRow}>
          <DollarSign size={16} color={colors.neutral[600]} style={styles.icon} />
          <Text style={styles.detailText}>${booking.amount.toFixed(2)}</Text>
        </View>
      </View>

      {booking.status === 'pending' && (
        <View style={styles.footer}>
          <Button
            title="Cancel"
            variant="outline"
            size="small"
            onPress={() => onCancel?.(booking)}
          />
        </View>
      )}
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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  providerName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: 2,
  },
  serviceType: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 2,
  },
  providerProfession: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral[200],
    marginVertical: 12,
  },
  details: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  detailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});