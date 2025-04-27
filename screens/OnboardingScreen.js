import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";
import { useTheme } from "../context/ThemeContext";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Welcome to Sewa Spot",
    description: "Connect with local service providers for all your needs!",
    image: require("../assets/images/onboarding1.png"), // Placeholder
  },
  {
    title: "Find Services Easily",
    description:
      "Search for plumbers, cleaners, tutors, and more in one place.",
    image: require("../assets/images/onboarding2.png"),
  },
  {
    title: "Book with Confidence",
    description: "Track your bookings and chat with providers seamlessly.",
    image: require("../assets/images/onboarding3.png"),
  },
];

export const OnboardingScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.image} />
            <Text style={[styles.title, { color: theme.text }]}>
              {slide.title}
            </Text>
            <Text style={[styles.description, { color: theme.text }]}>
              {slide.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <View style={styles.buttonContainer}>
        <Button
          title="Get Started"
          color={theme.primary}
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: { width: width * 0.7, height: width * 0.7, resizeMode: "contain" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 20 },
  description: { fontSize: 16, textAlign: "center", paddingHorizontal: 20 },
  buttonContainer: {
    padding: 20,
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
});
