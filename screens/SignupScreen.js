import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Picker,
  TouchableOpacity,
} from "react-native";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

export const SignupScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [adminKey, setAdminKey] = useState("");

  const handleSignup = () => {
    if (role === "admin" && adminKey !== "SECRET_KEY") {
      alert("Invalid admin key");
      return;
    }
    // Integrate Supabase auth here
    navigation.navigate("Drawer");
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>
        Sign Up for Sewa Spot
      </Text>
      <TextInput
        style={[styles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Email"
        placeholderTextColor={theme.text}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { borderColor: theme.border, color: theme.text }]}
        placeholder="Password"
        placeholderTextColor={theme.text}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Picker
        selectedValue={role}
        style={[styles.picker, { color: theme.text }]}
        onValueChange={(itemValue) => setRole(itemValue)}
      >
        <Picker.Item label="User" value="user" />
        <Picker.Item label="Service Provider" value="service_provider" />
        <Picker.Item label="Admin" value="admin" />
      </Picker>
      {role === "admin" && (
        <TextInput
          style={[
            styles.input,
            { borderColor: theme.border, color: theme.text },
          ]}
          placeholder="Admin Key"
          placeholderTextColor={theme.text}
          value={adminKey}
          onChangeText={setAdminKey}
          secureTextEntry
        />
      )}
      <Button title="Sign Up" color={theme.primary} onPress={handleSignup} />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={[styles.link, { color: theme.primary }]}>
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  picker: { height: 50, marginVertical: 10 },
  link: { marginTop: 20, textAlign: "center", fontSize: 16 },
});
