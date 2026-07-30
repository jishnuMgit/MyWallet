import "../../../global.css";

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { COLORS } from "../../../constants/theme";

const TabIcon = ({
  focused,
  name,
}: {
  focused: boolean;
  name: keyof typeof Ionicons.glyphMap;
}) => (
  <View
    style={{
      width: 48,
      height: 48,
      borderRadius: 24,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: focused ? COLORS.primary : "transparent",
    }}
  >
    <Ionicons
      name={name}
      size={24}
      color={focused ? "#fff" : "#8E8E93"}
    />
  </View>
);

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: "absolute",
          left: 10,
          right: 10,
          bottom: 20,
          height: 72,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderRadius: 36,

          elevation: 12,

          shadowColor: "#000",
          shadowOffset: { width: 0, height: 8 },
          shadowOpacity: 0.3,
          shadowRadius: 12,
        },

        tabBarItemStyle: {
          flex: 1,
        marginTop:15,
          justifyContent: "center",
          alignItems: "center",
          
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="home" />
          ),
        }}
      />

      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="swap-horizontal" />
          ),
        }}
      />

      <Tabs.Screen
        name="budget"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: focused
                  ? COLORS.primary
                  : "transparent",
              }}
            >
              <Ionicons
                name="add"
                size={30}
                style={{
                  textAlign: "center",
                  lineHeight: 30,
                  
                }}
className="border border-[#8E8E93] rounded-full p-1 shadow shadow-black/20"
                color={focused ? "#fff" : "#8E8E93"}
              />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="assets"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="pie-chart" />
          ),
        }}
      />

      <Tabs.Screen
        name="reports"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name="bar-chart" />
          ),
        }}
      />
    </Tabs>
  );
}