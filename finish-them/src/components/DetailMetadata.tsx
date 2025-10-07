import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { MediaItem } from "../data/database";

interface DetailMetadataProps {
  item: MediaItem;
}

export default function DetailMetadata({ item }: DetailMetadataProps) {
  if (item.type === "movie") {
    return (
      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>Duração: {item.duration}</Text>
        <Text style={styles.metaText}>Estúdio: {item.studio}</Text>
      </View>
    );
  }

  if (item.type === "game") {
    return (
      <View style={styles.metaContainer}>
        <Text style={styles.metaText}>Plataforma: {item.platform}</Text>
        <Text style={styles.metaText}>Status: {item.status}</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  metaContainer: {
    marginTop: 20,
    borderTopColor: Colors.inputBackground,
    borderTopWidth: 1,
    paddingTop: 20,
  },
  metaText: {
    color: Colors.textSecondary,
    fontSize: 14,
    marginBottom: 8,
  },
});
