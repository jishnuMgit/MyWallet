import "../../../global.css";

import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabIcon = ({
  focused,
  children,
}: {
  focused: boolean;
  children: React.ReactNode;
}) => (
  <View
    className={`h-12 w-12 items-center justify-center rounded-full ${
      focused ? "bg-green-600" : ""
    }`}
  >
    {children}
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
          left: 12,
          right: 12,
          bottom: 20,
          height: 72,
          backgroundColor: "#fff",
          borderTopWidth: 0,
          borderRadius: 36,

          elevation: 0,

          shadowColor: "green",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.15,
          shadowRadius: 12,
        },

        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          top: 15,
        },
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <Ionicons
                name="home"
                size={24}
                color={focused ? "#fff" : "#8E8E93"}
              />
            </TabIcon>
          ),
        }}
      />

      {/* Transactions */}
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <Ionicons
                name="swap-horizontal"
                size={24}
                color={focused ? "#fff" : "#8E8E93"}
              />
            </TabIcon>
          ),
        }}
      />

      {/* Add */}
      <Tabs.Screen
        name="AddTransctions"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: -18,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                className={`h-14 w-14 items-center justify-center rounded-full border shadow shadow-black/20 ${
                  focused
                    ? "bg-green-600 border-green-600"
                    : "bg-white border-gray-300"
                }`}
              >
                <Ionicons
                  name="add"
                  size={30}
                  color={focused ? "#fff" : "#8E8E93"}
                />
              </View>
            </View>
          ),
        }}
      />

      {/* Reports */}
      <Tabs.Screen
        name="reports"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <Ionicons
                name="pie-chart"
                size={24}
                color={focused ? "#fff" : "#8E8E93"}
              />
            </TabIcon>
          ),
        }}
      />

      {/* Settings */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused}>
              <AntDesign
                name="setting"
                size={24}
                color={focused ? "#fff" : "#8E8E93"}
              />
            </TabIcon>
          ),
        }}
      />
    </Tabs>
  );
}
