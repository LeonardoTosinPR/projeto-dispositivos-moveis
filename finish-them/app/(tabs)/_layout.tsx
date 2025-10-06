import { Colors } from "@/src/constants/Colors";
import { useAuth } from "@/src/context/AuthContext";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

function LogoutButton() {
  const { showActionSheetWithOptions } = useActionSheet();
  const { logout } = useAuth();

  const onPress = () => {
    const options = ["Sair", "Cancelar"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 1;

    showActionSheetWithOptions(
      { options, cancelButtonIndex, destructiveButtonIndex },
      (selectedIndex?: number) => {
        if (selectedIndex === destructiveButtonIndex) {
          logout();
        }
      }
    );
  };

  return (
    <Pressable onPress={onPress} style={{ marginRight: 16 }}>
      <Ionicons name="exit-outline" size={24} color={Colors.primary} />
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.text,
        headerTitleStyle: { fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: Colors.background,
          borderTopColor: Colors.inputBackground,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Finish Them",
          tabBarLabel: "Início",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerRight: () => <LogoutButton />,
        }}
      />
    </Tabs>
  );
}
