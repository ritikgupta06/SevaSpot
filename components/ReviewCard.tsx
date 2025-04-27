import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Review } from '@/utils/types';
import { colors } from '@/utils/colors';
import { Star } from 'lucide-react-native';

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starColor = i <= review.rating ? '#FFD700' : colors.neutral[300];
      stars.push(
        <Star
          key={i}
          size={16}
          color={starColor}
          fill={i <= review.rating ? starColor : 'none'}
          style={styles.starIcon}
        />
      );
    }
    return stars;
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: review.userAvatar }} style={styles.avatar} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{review.userName}</Text>
          <Text style={styles.date}>{formatDate(review.date)}</Text>
        </View>
      </View>

      <View style={styles.ratingContainer}>
        {renderStars()}
      </View>

      <Text style={styles.reviewText}>{review.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.text.primary,
  },
  date: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  starIcon: {
    marginRight: 4,
  },
  reviewText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    lineHeight: 22,
  },
});