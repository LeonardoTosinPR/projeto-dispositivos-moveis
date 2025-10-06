import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "../src/context/AuthContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <ActionSheetProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Slot />
        </GestureHandlerRootView>
      </ActionSheetProvider>
    </AuthProvider>
  );
}
