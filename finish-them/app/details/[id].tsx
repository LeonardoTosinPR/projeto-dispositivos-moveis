import DetailMetadata from "@/src/components/DetailMetadata"; // Importe o novo componente
import { Colors } from "@/src/constants/Colors";
import { MOCK_DATA } from "@/src/data/database";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const item = MOCK_DATA.find((item) => item.id.toString() === id);

  if (!item) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ color: Colors.text }}>Item não encontrado!</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen
        options={{
          title: item.name,
          headerTintColor: Colors.text,
          headerStyle: { backgroundColor: Colors.background },
          headerBackVisible: false,
        }}
      />
      <ScrollView>
        <View style={styles.content}>
          <Image source={item.cover} style={styles.coverImage} />

          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.genre}>{item.genre}</Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>Nota: {item.rating}/10</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>

          {}
          <DetailMetadata item={item} />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Voltar para a Lista</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  content: { padding: 16, paddingBottom: 32 },
  coverImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 4,
  },
  genre: { fontSize: 16, color: Colors.textSecondary, marginBottom: 12 },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  ratingText: { color: Colors.primary, fontSize: 18, fontWeight: "bold" },
  description: {
    fontSize: 16,
    color: Colors.text,
    lineHeight: 24,
  },
  backButton: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  backButtonText: {
    color: Colors.text,
    fontSize: 16,
    fontWeight: "bold",
  },
});
