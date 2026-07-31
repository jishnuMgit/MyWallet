import React from "react";
import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import '../../global.css'
import BalanceCard from "./BalanceCard";
const Header = () => {
  return (
   
    <View>
<View>
   <LinearGradient
colors={["#15803D", "#16A34A", "#22C55E", "#4ADE80","#86EFAC","#DCFCE7","#FFFF"]}      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 100,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "700",
            }}
          >
            Hello, Jishnu 👋
          </Text>

          <Text
            style={{
              color: "#E5E7EB",
              marginTop: 4,
              fontSize: 15,
            }}
          >
            Good Morning
          </Text>
        </View>

        
<Pressable
  className="w-[42px] h-[42px] rounded-full items-center justify-center bg-green-500"
>
  <FontAwesome name="bell-o" size={20} color="#fff" />
</Pressable>
      </View>

<BalanceCard/>
    </LinearGradient>
</View>
<View>




</View>


    </View>
  );
};

export default Header;