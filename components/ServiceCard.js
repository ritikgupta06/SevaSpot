import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "../context/ThemeContext";

export const ServiceCard = ({ service, onPress }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card }]}
      onPress={onPress}
    >
      <Image source={service.icon} style={styles.icon} />
      <Text style={[styles.name, { color: theme.text }]}>{service.name}</Text>
      <Text style={[styles.category, { color: theme.text }]}>
        {service.category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
  },
  icon: { width: 50, height: 50, resizeMode: "contain" },
  name: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  category: { fontSize: 12, marginTop: 5 },
});
