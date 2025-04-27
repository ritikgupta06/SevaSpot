import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { UserDashboardScreen } from "../seva_spot/screens/UserDashboardScreen";
import { ServiceProviderDashboardScreen } from "../seva_spot/screens/ServiceProviderDashboardScreen";
import { AdminDashboardScreen } from "../seva_spot/screens/AdminDashboardScreen";
import { ProfileScreen } from "../seva_spot/screens/ProfileScreen";
import { BookingsScreen } from "../seva_spot/screens/BookingsScreen";
import { NotificationsScreen } from "../seva_spot/screens/NotificationsScreen";
import { SupportScreen } from "../seva_spot/screens/SupportScreen";
import { DrawerContent } from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({ userRole }) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      {userRole === "user" && (
        <>
          <Drawer.Screen name="Dashboard" component={UserDashboardScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Services" component={UserDashboardScreen} />
          <Drawer.Screen name="My Bookings" component={BookingsScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </>
      )}
      {userRole === "service_provider" && (
        <>
          <Drawer.Screen
            name="Dashboard"
            component={ServiceProviderDashboardScreen}
          />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen
            name="Services"
            component={ServiceProviderDashboardScreen}
          />
          <Drawer.Screen name="My Bookings" component={BookingsScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </>
      )}
      {userRole === "admin" && (
        <>
          <Drawer.Screen name="Dashboard" component={AdminDashboardScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
        </>
      )}
    </Drawer.Navigator>
  );
};
