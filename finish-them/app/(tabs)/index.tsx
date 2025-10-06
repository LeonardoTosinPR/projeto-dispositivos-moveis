import CardItem from "@/src/components/CardItem";
import { Colors } from "@/src/constants/Colors";
import { MOCK_DATA } from "@/src/data/database";
import React, { useMemo } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

console.log("Dados carregados:", MOCK_DATA);

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
        <View style={styles.section}>
          <Text style={styles.title}>Filmes Assistidos</Text>
          <FlatList
            data={movies}
            renderItem={({ item }) => <CardItem item={item} />}
            keyExtractor={(item) => `movie-${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Jogos Finalizados</Text>
          <FlatList
            data={games}
            renderItem={({ item }) => <CardItem item={item} />}
            keyExtractor={(item) => `game-${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { paddingVertical: 16 },
  section: {
    marginBottom: 24,
    height: 250,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text,
    marginLeft: 16,
    marginBottom: 12,
  },
  listContent: { paddingLeft: 16 },
});
