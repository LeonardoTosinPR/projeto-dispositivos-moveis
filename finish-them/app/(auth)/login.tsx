import { Colors } from "@/src/constants/Colors";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAuth } from "../../src/context/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = () => {
    if (email && password) {
      login();
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Finish Them</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textSecondary}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={Colors.textSecondary}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Link href="/register" asChild>
        <TouchableOpacity>
          <Text style={styles.link}>Não tem uma conta? Registre-se</Text>
        </TouchableOpacity>
      </Link>
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
    color: Colors.primary,
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
  link: { color: Colors.textSecondary, textAlign: "center", marginTop: 20 },
});
