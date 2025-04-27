import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../context/ThemeContext";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={toggleTheme}>
      <Ionicons
        name={isDarkMode ? "sunny" : "moon"}
        size={24}
        color={isDarkMode ? "#FFFFFF" : "#333333"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10 },
});
