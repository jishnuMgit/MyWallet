import { Link } from "expo-router";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>💰</Text>
          </View>

          <Text style={styles.title}>Welcome Back 👋</Text>
          <Text style={styles.subtitle}>
            Sign in to continue managing your finances
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              placeholder="Enter your email"
              placeholderTextColor="#94A3B8"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.passwordHeader}>
              <Text style={styles.label}>Password</Text>

              <TouchableOpacity>
                <Link href="/(tabs)/home" style={styles.forgot}>Forgot?</Link>
              </TouchableOpacity>
            </View>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don't have an account?
            </Text>

            <Link href="./sign-up">
              <TouchableOpacity>
                <Text style={styles.signupLink}> Sign Up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const PRIMARY = "#16A34A";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#071A12",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 45,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  logoText: {
    fontSize: 42,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "700",
  },

  subtitle: {
    color: "#94A3B8",
    marginTop: 8,
    textAlign: "center",
    fontSize: 15,
  },

  form: {
    gap: 20,
  },

  inputContainer: {
    gap: 8,
  },

  label: {
    color: "#E2E8F0",
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    height: 55,
    backgroundColor: "#0F2A1F",
    borderRadius: 14,
    paddingHorizontal: 18,
    color: "#fff",
    borderWidth: 1,
    borderColor: "#1E4D36",
    fontSize: 16,
  },

  passwordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  forgot: {
    color: PRIMARY,
    fontWeight: "600",
  },

  loginButton: {
    height: 56,
    backgroundColor: PRIMARY,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  loginText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 17,
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signupText: {
    color: "#94A3B8",
    fontSize: 15,
  },

  signupLink: {
    color: PRIMARY,
    fontWeight: "700",
    fontSize: 15,
  },
});