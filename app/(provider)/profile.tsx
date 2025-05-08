// app/(provider)/profile.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import { colors } from "@/utils/colors";
import { providerProfile } from "./utils/providerData";
import { useRouter } from "expo-router"; // 👈 Import router
import React from "react";

export default function ProviderProfile() {
  const router = useRouter(); // 👈 Initialize router

  const handleLogout = () => {
    console.log("Logout");
    router.replace("/login"); // 👈 Navigate to login page
  };

  return (
    <ScrollView style={styles.container}>
      {Platform.OS === "android" && <StatusBar backgroundColor="black" />}
      <View style={styles.profileHeader}>
        <View style={styles.avatar} />
        <Text style={styles.name}>{providerProfile.name}</Text>
        <Text style={styles.rating}>
          ⭐ {providerProfile.rating} ({providerProfile.reviews} reviews)
        </Text>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Occupations Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Services</Text>
        <View style={styles.servicesContainer}>
          {providerProfile.services.map((service) => (
            <View key={service} style={styles.serviceBadge}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity style={styles.addServiceButton}>
          <Text style={styles.addServiceText}>+ Add New Service</Text>
        </TouchableOpacity>
      </View>

      {/* Stats Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>My Stats</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {providerProfile.completedJobs}
            </Text>
            <Text style={styles.statLabel}>Jobs Done</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {providerProfile.repeatClients}
            </Text>
            <Text style={styles.statLabel}>Repeat Clients</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {providerProfile.responseRate}%
            </Text>
            <Text style={styles.statLabel}>Response Rate</Text>
          </View>
        </View>
      </View>

      {/* Verification Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Verification</Text>
        <View style={styles.verificationItem}>
          <Text style={styles.verificationText}>Email Verified</Text>
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
        <View style={styles.verificationItem}>
          <Text style={styles.verificationText}>Phone Verified</Text>
          <Text style={styles.verifiedText}>Verified</Text>
        </View>
        <View style={styles.verificationItem}>
          <Text style={styles.verificationText}>ID Verified</Text>
          <Text style={styles.notVerifiedText}>Pending</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    padding: 16,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.neutral[300],
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    color: colors.text.secondary,
  },
  logoutButton: {
    backgroundColor: colors.error.main,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  section: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 16,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  serviceBadge: {
    backgroundColor: colors.primary.light,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  serviceText: {
    color: colors.primary.main,
    fontSize: 14,
  },
  addServiceButton: {
    borderWidth: 1,
    borderColor: colors.primary.main,
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
  },
  addServiceText: {
    color: colors.primary.main,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    alignItems: "center",
    width: "30%",
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary.main,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: colors.text.secondary,
    textAlign: "center",
  },
  verificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  verificationText: {
    fontSize: 16,
    color: colors.text.primary,
  },
  verifiedText: {
    fontSize: 16,
    color: colors.success.main,
    fontWeight: "600",
  },
  notVerifiedText: {
    fontSize: 16,
    color: colors.error.main,
    fontWeight: "600",
  },
});
