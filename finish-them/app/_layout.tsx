import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <ActionSheetProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Slot />
      </GestureHandlerRootView>
    </ActionSheetProvider>
  );
}
