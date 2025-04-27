// app/(provider)/explore.tsx
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { colors } from "@/utils/colors";
import { serviceRequests } from "./utils/providerData";

export default function ProviderExplore() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nearby Service Requests</Text>

      {serviceRequests.map((request) => (
        <View key={request.id} style={styles.requestCard}>
          <View style={styles.requestHeader}>
            <Text style={styles.requestTitle}>{request.service}</Text>
            <Text style={styles.requestPrice}>${request.price}</Text>
          </View>
          <Text style={styles.requestDescription}>{request.description}</Text>
          <Text style={styles.requestLocation}>📍 {request.location}</Text>
          <Text style={styles.requestTime}>⏱️ Posted {request.time} ago</Text>

          <View style={styles.requestActions}>
            <TouchableOpacity style={styles.declineButton}>
              <Text style={styles.declineText}>Decline</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.secondary,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text.primary,
    marginBottom: 16,
  },
  requestCard: {
    backgroundColor: colors.background.primary,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  requestHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  requestTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text.primary,
  },
  requestPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary.main,
  },
  requestDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  requestLocation: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 4,
  },
  requestTime: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 12,
  },
  requestActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  declineButton: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.error.background,
    borderRadius: 8,
    marginRight: 8,
    alignItems: "center",
  },
  acceptButton: {
    flex: 1,
    padding: 12,
    backgroundColor: colors.primary.main,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
  },
  declineText: {
    color: colors.error.main,
    fontWeight: "600",
  },
  acceptText: {
    color: colors.text.primary,
    fontWeight: "600",
  },
});
