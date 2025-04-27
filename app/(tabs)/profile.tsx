import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronRight, Heart, Clock, Wallet, MapPin, Mail, Phone, LogOut, Settings, CircleHelp as HelpCircle, Shield } from 'lucide-react-native';
import { colors } from '@/utils/colors';
import { currentUser } from '@/utils/data';
import HeaderBar from '@/components/common/HeaderBar';
import Button from '@/components/common/Button';

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  showBadge?: boolean;
}

function MenuItem({ icon, title, onPress, showBadge = false }: MenuItemProps) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.menuItemLeft}>
        {icon}
        <Text style={styles.menuItemTitle}>{title}</Text>
      </View>
      <View style={styles.menuItemRight}>
        {showBadge && <View style={styles.menuItemBadge} />}
        <ChevronRight size={20} color={colors.neutral[400]} />
      </View>
    </TouchableOpacity>
  );
}

export default function ProfileScreen() {
  const router = useRouter();

  const handleNavigateToSaved = () => {
    console.log('Navigate to saved providers');
  };

  const handleNavigateToHistory = () => {
    console.log('Navigate to booking history');
  };

  const handleNavigateToPayments = () => {
    console.log('Navigate to payment methods');
  };

  const handleNavigateToAddresses = () => {
    console.log('Navigate to addresses');
  };

  const handleNavigateToSettings = () => {
    console.log('Navigate to settings');
  };

  const handleNavigateToHelp = () => {
    console.log('Navigate to help');
  };

  const handleNavigateToPrivacy = () => {
    console.log('Navigate to privacy');
  };

  const handleLogout = () => {
    console.log('Logout');
  };

  return (
    <View style={styles.container}>
      <HeaderBar 
        title="Profile" 
        rightComponent={
          <TouchableOpacity onPress={handleNavigateToSettings} style={styles.settingsButton}>
            <Settings size={24} color={colors.text.primary} />
          </TouchableOpacity>
        }
      />
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <Image source={{ uri: currentUser.avatar }} style={styles.profileImage} />
          <Text style={styles.profileName}>{currentUser.name}</Text>
          <Button 
            title="Edit Profile" 
            variant="outline" 
            size="small" 
            onPress={() => console.log('Edit profile')} 
            style={styles.editButton}
          />
        </View>
        
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Mail size={16} color={colors.neutral[600]} style={styles.infoIcon} />
            <Text style={styles.infoText}>{currentUser.email}</Text>
          </View>
          <View style={styles.infoItem}>
            <Phone size={16} color={colors.neutral[600]} style={styles.infoIcon} />
            <Text style={styles.infoText}>{currentUser.phone}</Text>
          </View>
          <View style={styles.infoItem}>
            <MapPin size={16} color={colors.neutral[600]} style={styles.infoIcon} />
            <Text style={styles.infoText}>{currentUser.address}</Text>
          </View>
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Services</Text>
          <MenuItem 
            icon={<Heart size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Saved Providers" 
            onPress={handleNavigateToSaved}
            showBadge={true}
          />
          <MenuItem 
            icon={<Clock size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Service History" 
            onPress={handleNavigateToHistory}
          />
          <MenuItem 
            icon={<Wallet size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Payment Methods" 
            onPress={handleNavigateToPayments}
          />
          <MenuItem 
            icon={<MapPin size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Addresses" 
            onPress={handleNavigateToAddresses}
          />
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Account</Text>
          <MenuItem 
            icon={<HelpCircle size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Help & Support" 
            onPress={handleNavigateToHelp}
          />
          <MenuItem 
            icon={<Shield size={20} color={colors.primary.main} style={styles.menuIcon} />}
            title="Privacy & Terms" 
            onPress={handleNavigateToPrivacy}
          />
          <MenuItem 
            icon={<LogOut size={20} color={colors.error.main} style={styles.menuIcon} />}
            title="Logout" 
            onPress={handleLogout}
          />
        </View>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
  settingsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeader: {
    backgroundColor: colors.background.primary,
    paddingVertical: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: colors.text.primary,
    marginBottom: 8,
  },
  editButton: {
    paddingHorizontal: 16,
  },
  infoSection: {
    backgroundColor: colors.background.primary,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoIcon: {
    marginRight: 12,
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.text.secondary,
  },
  menuSection: {
    backgroundColor: colors.background.primary,
    marginTop: 8,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  menuSectionTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItemTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.text.primary,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemBadge: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary.main,
    marginRight: 8,
  },
  versionContainer: {
    padding: 24,
    alignItems: 'center',
  },
  versionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.text.tertiary,
  },
});