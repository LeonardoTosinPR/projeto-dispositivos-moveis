import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet } from "react-native";
import { MediaItem } from "../data/database";

interface CardItemProps {
  item: MediaItem;
}

export default function CardItem({ item }: CardItemProps) {
  return (
    <Link
      href={{
        pathname: "/details/[id]",
        params: { id: item.id.toString() },
      }}
      asChild
    >
      <Pressable style={styles.cardContainer}>
        <Image source={item.cover} style={styles.cardImage} />
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 140,
    height: 210,
    borderRadius: 8,
    overflow: "hidden",
    marginRight: 12,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
});
