// app/(provider)/home.tsx
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
import { currentJobs, earningsData } from "./utils/providerData";
import React from "react";

export default function ProviderHome() {
  return (
    <ScrollView style={styles.container}>
      {Platform.OS === "android" && <StatusBar backgroundColor="black" />}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Earnings</Text>
        <View style={styles.earningsContainer}>
          <View style={styles.earningCard}>
            <Text style={styles.earningLabel}>Today</Text>
            <Text style={styles.earningAmount}>${earningsData.today}</Text>
          </View>
          <View style={styles.earningCard}>
            <Text style={styles.earningLabel}>This Week</Text>
            <Text style={styles.earningAmount}>${earningsData.week}</Text>
          </View>
          <View style={styles.earningCard}>
            <Text style={styles.earningLabel}>This Month</Text>
            <Text style={styles.earningAmount}>${earningsData.month}</Text>
          </View>
        </View>
      </View>

      {/* Current Jobs */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Jobs</Text>
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobClient}>Client: {job.client}</Text>
              <Text style={styles.jobTime}>Scheduled: {job.time}</Text>
              <View style={styles.jobActions}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionText}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.actionButton, styles.primaryButton]}
                >
                  <Text style={[styles.actionText, styles.primaryActionText]}>
                    Start Job
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noJobsText}>No active jobs at the moment</Text>
        )}
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 12,
  },
  earningsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  earningCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: 16,
    width: "30%",
    alignItems: "center",
  },
  earningLabel: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  earningAmount: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  jobCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
    marginBottom: 4,
  },
  jobClient: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  jobTime: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  jobActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.neutral[300],
  },
  primaryButton: {
    backgroundColor: colors.primary.main,
    borderColor: colors.primary.main,
  },
  actionText: {
    color: colors.text.primary,
  },
  primaryActionText: {
    color: colors.text.primary,
  },
  noJobsText: {
    textAlign: "center",
    color: colors.text.secondary,
    marginVertical: 16,
  },
});
