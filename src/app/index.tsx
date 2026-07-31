import { router } from "expo-router";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function SplashScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <LinearGradient
        colors={["#14532D", "#15803D", "#16A34A", "#4ADE80"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.container}
      >
        {/* App Illustration */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/splash1.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Bottom Card */}
        <View style={styles.card}>
          <Text style={styles.title}>Smart Finance Tracking</Text>

          <Text style={styles.subtitle}>
            Track expenses, manage budgets, and achieve your financial goals
            with ease.
          </Text>

          <Pressable
            style={styles.button}
            onPress={() => router.replace("/(auth)/sign-in")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },

  image: {
    width: "90%",
    height: "70%",
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: 28,
    paddingTop: 35,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "800",
    color: "#111827",
    textAlign: "center",
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },

  button: {
    backgroundColor: "#16A34A",
    height: 58,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#16A34A",
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 6,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
});