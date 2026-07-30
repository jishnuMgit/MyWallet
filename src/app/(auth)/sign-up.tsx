import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = () => {
    if (!email || !password || !repassword) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    if (password !== repassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    Alert.alert("Success", "Account created successfully!", [
      {
        text: "OK",
        onPress: () => router.replace("/sign-in"),
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>💰</Text>
          </View>

          <Text style={styles.title}>Create Account 👋</Text>

          <Text style={styles.subtitle}>
            Create your account to start managing your finances
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
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

          {/* Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>

            <TextInput
              placeholder="Enter your password"
              placeholderTextColor="#94A3B8"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password</Text>

            <TextInput
              placeholder="Confirm your password"
              placeholderTextColor="#94A3B8"
              secureTextEntry
              value={repassword}
              onChangeText={setRepassword}
              style={styles.input}
            />
          </View>

          {/* Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit}
          >
            <Text style={styles.loginText}>Create Account</Text>
          </TouchableOpacity>

          {/* Sign In */}
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Already have an account?
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
            >
              <Text style={styles.signupLink}> Sign In</Text>
            </TouchableOpacity>
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