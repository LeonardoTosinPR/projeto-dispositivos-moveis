import { Colors } from "@/src/constants/Colors";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface FormErrors {
  name?: string;
  genre?: string;
  rating?: string;
}

export default function AddItemScreen() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "O nome é obrigatório.";
    if (!genre) newErrors.genre = "O gênero é obrigatório.";
    if (!rating) {
      newErrors.rating = "A nota é obrigatória.";
    } else if (
      isNaN(Number(rating)) ||
      Number(rating) < 0 ||
      Number(rating) > 10
    ) {
      newErrors.rating = "A nota deve ser um número entre 0 e 10.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      Alert.alert("Sucesso!", "O item foi salvo com sucesso. (Simulação)", [
        {
          text: "OK",
          onPress: () => {
            setName("");
            setGenre("");
            setRating("");
          },
        },
      ]);
    }
    console.log(name, genre, rating);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Adicionar Novo Item</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome do Filme/Jogo</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: The Last of Us"
            value={name}
            onChangeText={setName}
            placeholderTextColor={Colors.textSecondary}
          />
          {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Gênero</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Ação, Aventura"
            value={genre}
            onChangeText={setGenre}
            placeholderTextColor={Colors.textSecondary}
          />
          {errors.genre && <Text style={styles.errorText}>{errors.genre}</Text>}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nota (0 a 10)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 9.5"
            value={rating}
            onChangeText={setRating}
            keyboardType="numeric"
            placeholderTextColor={Colors.textSecondary}
          />
          {errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}
        </View>

        <Pressable style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: Colors.background },
  container: { flexGrow: 1, padding: 24 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.text,
    marginBottom: 32,
    textAlign: "center",
  },
  inputContainer: { marginBottom: 20 },
  label: { fontSize: 16, color: Colors.textSecondary, marginBottom: 8 },
  input: {
    backgroundColor: Colors.inputBackground,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: Colors.text,
    borderWidth: 1,
    borderColor: "transparent",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  errorText: { color: "#ff5555", marginTop: 6, fontSize: 14 },
});
