import MediaSection from "@/src/components/MediaSection";
import { Colors } from "@/src/constants/Colors";
import { MOCK_DATA } from "@/src/data/database";
import React, { useMemo } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function HomeScreen() {
  const movies = useMemo(
    () => MOCK_DATA.filter((item) => item.type === "movie"),
    []
  );
  const games = useMemo(
    () => MOCK_DATA.filter((item) => item.type === "game"),
    []
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <MediaSection title="Filmes Assistidos" data={movies} />
        <MediaSection title="Jogos Finalizados" data={games} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { paddingVertical: 16 },
});
