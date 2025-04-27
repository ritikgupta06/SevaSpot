import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Eye, EyeOff, ArrowLeft, ChevronDown } from "lucide-react-native";
import { colors } from "@/utils/colors";
import Button from "@/components/common/Button";
import RNPickerSelect from "react-native-picker-select";

// List of services for providers
const SERVICES = [
  { label: "Plumber", value: "plumber" },
  { label: "Electrician", value: "electrician" },
  { label: "Carpenter", value: "carpenter" },
  { label: "Cleaner", value: "cleaner" },
  { label: "Painter", value: "painter" },
  { label: "AC Technician", value: "ac_technician" },
  { label: "Gardener", value: "gardener" },
  { label: "Mason", value: "mason" },
];

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState<"customer" | "provider">("customer");
  const [service, setService] = useState<string | null>(null);

  const handleSignup = async () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (userType === "provider" && !service) {
      setError("Please select your service");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Implement signup logic here
      // You would send userType and service (if provider) to your backend
      const userData = {
        name,
        email,
        password,
        userType,
        ...(userType === "provider" && { service }),
      };

      console.log("Signup data:", userData); // For testing

      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      router.replace("/(provider)/home");
    } catch (err) {
      setError("Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <ArrowLeft size={24} color={colors.text.primary} />
          </TouchableOpacity>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
            }}
            style={styles.headerImage}
          />
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>
            Join our community of service providers and customers
          </Text>
        </View>

        <View style={styles.form}>
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          {/* User Type Selection */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>I am a</Text>
            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === "customer" && styles.userTypeButtonActive,
                ]}
                onPress={() => setUserType("customer")}
              >
                <Text
                  style={[
                    styles.userTypeButtonText,
                    userType === "customer" && styles.userTypeButtonTextActive,
                  ]}
                >
                  Customer
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.userTypeButton,
                  userType === "provider" && styles.userTypeButtonActive,
                ]}
                onPress={() => setUserType("provider")}
              >
                <Text
                  style={[
                    styles.userTypeButtonText,
                    userType === "provider" && styles.userTypeButtonTextActive,
                  ]}
                >
                  Service Provider
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Service Selection (only for providers) */}
          {userType === "provider" && (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Service You Provide</Text>
              <View style={styles.pickerContainer}>
                <RNPickerSelect
                  onValueChange={(value) => setService(value)}
                  items={SERVICES}
                  placeholder={{
                    label: "Select your service...",
                    value: null,
                    color: colors.text.tertiary,
                  }}
                  style={pickerSelectStyles}
                  value={service}
                  Icon={() => (
                    <ChevronDown size={20} color={colors.text.tertiary} />
                  )}
                />
              </View>
            </View>
          )}

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              placeholderTextColor={colors.text.tertiary}
              autoCapitalize="words"
              autoComplete="name"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor={colors.text.tertiary}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Create a password"
                placeholderTextColor={colors.text.tertiary}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoComplete="password-new"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color={colors.text.tertiary} />
                ) : (
                  <Eye size={20} color={colors.text.tertiary} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm your password"
                placeholderTextColor={colors.text.tertiary}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                autoComplete="password-new"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff size={20} color={colors.text.tertiary} />
                ) : (
                  <Eye size={20} color={colors.text.tertiary} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <Button
            title="Create Account"
            onPress={handleSignup}
            loading={loading}
            style={styles.button}
          />

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <Link href="/login" asChild>
              <TouchableOpacity>
                <Text style={styles.loginLink}>Sign In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.text.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  inputAndroid: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.text.primary,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  iconContainer: {
    paddingRight: 16,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 60,
    left: 24,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background.secondary,
    borderRadius: 20,
  },
  headerImage: {
    width: 200,
    height: 200,
    marginBottom: 24,
    borderRadius: 100,
  },
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: colors.text.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.text.secondary,
    textAlign: "center",
    paddingHorizontal: 40,
  },
  form: {
    padding: 24,
  },
  errorContainer: {
    backgroundColor: colors.error.background,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorText: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: colors.error.main,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 8,
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.text.primary,
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    padding: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: colors.text.primary,
    padding: 16,
  },
  eyeButton: {
    padding: 16,
  },
  button: {
    marginTop: 8,
    marginBottom: 24,
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: colors.text.secondary,
  },
  loginLink: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: colors.primary.main,
  },
  userTypeContainer: {
    flexDirection: "row",
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
    overflow: "hidden",
  },
  userTypeButton: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  userTypeButtonActive: {
    backgroundColor: colors.primary.main,
  },
  userTypeButtonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: colors.text.secondary,
  },
  userTypeButtonTextActive: {
    color: colors.text.primary,
  },
  pickerContainer: {
    backgroundColor: colors.background.secondary,
    borderRadius: 12,
  },
});
