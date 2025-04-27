import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Bell } from 'lucide-react-native';
import { colors } from '@/utils/colors';

interface HeaderBarProps {
  title: string;
  showBack?: boolean;
  showNotifications?: boolean;
  rightComponent?: React.ReactNode;
}

export default function HeaderBar({
  title,
  showBack = false,
  showNotifications = false,
  rightComponent,
}: HeaderBarProps) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* StatusBar adjustment for Android */}
      {Platform.OS === 'android' && <StatusBar backgroundColor="black" />}

      <View style={styles.contentContainer}>
        <View style={styles.leftContainer}>
          {showBack && (
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <ChevronLeft size={24} color={colors.text.primary} />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {title}
          </Text>
        </View>

        <View style={styles.rightContainer}>
          {showNotifications && (
            <TouchableOpacity style={styles.iconButton}>
              <Bell size={24} color={colors.text.primary} />
              <View style={styles.notificationBadge} />
            </TouchableOpacity>
          )}
          {rightComponent}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.neutral[200],
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50, // Standard Android header height
    paddingHorizontal: 16,
  },
  leftContainer: {
    minWidth: 40,
    alignItems: 'flex-start',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -8,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.text.primary,
    textAlign: 'center',
  },
  rightContainer: {
    minWidth: 40,
    alignItems: 'flex-end',
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.error.main,
  },
});
