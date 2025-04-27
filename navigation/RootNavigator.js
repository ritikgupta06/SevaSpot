import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingScreen } from "../seva_spot/screens/OnboardingScreen";
import { LoginScreen } from "../seva_spot/screens/LoginScreen";
import { SignupScreen } from "../seva_spot/screens/SignupScreen";
import { DrawerNavigator } from "./DrawerNavigator";
import { useAuth } from "../context/AuthContext";

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const { user } = useAuth(); // Assume AuthContext provides user info

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Drawer"
            component={() => <DrawerNavigator userRole={user.role} />}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
