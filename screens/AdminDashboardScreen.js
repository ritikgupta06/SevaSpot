import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../context/ThemeContext";

const users = [
  { id: "1", name: "John Doe", role: "User", status: "Active" },
  { id: "2", name: "Jane Smith", role: "Service Provider", status: "Pending" },
];

export const AdminDashboardScreen = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Admin Dashboard</Text>
      <Text style={[styles.subtitle, { color: theme.text }]}>Manage Users</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.userCard, { backgroundColor: theme.card }]}>
            <Text style={[styles.userText, { color: theme.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.userText, { color: theme.text }]}>
              Role: {item.role}
            </Text>
            <Text style={[styles.userText, { color: theme.text }]}>
              Status: {item.status}
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: theme.primary }]}
                onPress={() => alert("Approved")}
              >
                <Text style={styles.buttonText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "#FF3B30" }]}
                onPress={() => alert("Suspended")}
              >
                <Text style={styles.buttonText}>Suspend</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.userList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 20 },
  userCard: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  userText: { fontSize: 16, marginBottom: 5 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between" },
  button: { padding: 10, borderRadius: 8, flex: 1, marginHorizontal: 5 },
  buttonText: { color: "#FFFFFF", textAlign: "center", fontSize: 16 },
  userList: { paddingBottom: 20 },
});
