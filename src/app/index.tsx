import { router } from "expo-router";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  Text,
} from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      

      <View style={styles.bottomContainer}>
                         <Text className="text-white text-2xl flex justify-center bottom-10" >Smart Finance Tracking</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.replace("/(auth)/sign-in")}
        >


          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041A1A",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});