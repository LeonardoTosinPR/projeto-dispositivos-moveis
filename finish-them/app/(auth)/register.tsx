import { Colors } from "@/src/constants/Colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();
  const handleRegister = () => {
    Alert.alert("Sucesso", "Conta criada! Por favor, faça o login.");
    router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textSecondary}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={Colors.textSecondary}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.text,
    textAlign: "center",
    marginBottom: 40,
  },
  input: {
    backgroundColor: Colors.inputBackground,
    color: Colors.text,
    padding: Platform.OS === "ios" ? 15 : 12,
    borderRadius: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: { color: Colors.text, fontSize: 16, fontWeight: "bold" },
});
