import { View, Text } from "react-native";
    import { COLORS } from "../../../constants/theme";

export default function Home() {
  return (
   

<View style={{ backgroundColor: COLORS.primary }}>
   <Text className="text-5xl font-bold text-red-500">
        NativeWind v5
      </Text>
      </View>
  );
}