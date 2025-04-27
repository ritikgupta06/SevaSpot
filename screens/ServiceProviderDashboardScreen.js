import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const requests = [
  { id: "1", service: "Plumber", date: "2025-04-21", status: "Pending" },
  { id: "2", service: "Cleaner", date: "2025-04-22", status: "Accepted" },
];

export const ServiceProviderDashboardScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Service Requests
      </Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.requestCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.requestText, { color: theme.text }]}>
              {item.service}
            </Text>
            <Text style={[styles.requestText, { color: theme.text }]}>
              Date: {item.date}
            </Text>
            <Text style={[styles.requestText, { color: theme.text }]}>
              Status: {item.status}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.primary }]}
                onPress={() => alert("Accepted")}
              >
                <Text style={styles.buttonText}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FF3B30" }]}
                onPress={() => alert("Rejected")}
              >
                <Text style={styles.buttonText}>Reject</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.requestList}
      />
      <TouchableOpacity
        style={[styles.profileButton, { backgroundColor: theme.primary }]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  requestCard: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  requestText: { fontSize: 16, marginBottom: 5 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 10, borderRadius: 8, flex: 1, marginHorizontal: 5 },
  buttonText: { color: "#FFFFFF", textAlign: "center", fontSize: 16 },
  profileButton: { padding: 15, borderRadius: 8, marginTop: 20 },
  requestList: { paddingBottom: 20 },
});
