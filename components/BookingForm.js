import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export const BookingForm = ({ service }) => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");

  const handleBooking = () => {
    // Integrate Supabase to save booking
    Alert.alert("Success", `Booked ${service.name} successfully!`);
    navigation.navigate("My Bookings");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Book {service.name}
      </Text>
      <TextInput
        style={[styles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Date (e.g., 2025-04-21)"
        placeholderTextColor={theme.text}
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Time (e.g., 10:00 AM)"
        placeholderTextColor={theme.text}
        value={time}
        onChangeText={setTime}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Location"
        placeholderTextColor={theme.text}
        value={location}
        onChangeText={setLocation}
      />
      <Button
        title="Confirm Booking"
        color={theme.primary}
        onPress={handleBooking}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
});
