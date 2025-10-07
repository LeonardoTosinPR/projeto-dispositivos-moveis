import { Colors } from "@/src/constants/Colors";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

function OptionsButton() {
  const { showActionSheetWithOptions } = useActionSheet();

  const onPress = () => {
    const options = ["Configurações", "Sobre o App", "Cancelar"];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        title: "Opções do App",
        message: "O que você gostaria de fazer?",
      },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case 0:
            console.log("Usuário selecionou Configurações");
            break;

          case 1:
            console.log("Usuário selecionou Sobre o App");
            break;

          case cancelButtonIndex:
        }
      }
    );
  };

  return (
    <Pressable onPress={onPress} style={{ marginRight: 16 }}>
      <Ionicons name="ellipsis-vertical" size={24} color={Colors.primary} />
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
          headerRight: () => <OptionsButton />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Adicionar Item",
          tabBarLabel: "Adicionar",
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
