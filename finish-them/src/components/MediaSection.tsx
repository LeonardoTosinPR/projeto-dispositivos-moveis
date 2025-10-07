import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { MediaItem } from "../data/database";
import CardItem from "./CardItem";

interface MediaSectionProps {
  title: string;
  data: MediaItem[];
}

export default function MediaSection({ title, data }: MediaSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => `${item.type}-${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  listContent: {
    paddingLeft: 16,
  },
});
