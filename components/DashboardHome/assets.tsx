import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const cards = [
  {
    title: "Assets",
    value: "₹120K",
    change: "+12%",
    changeColor: "#22C55E",
    route: "/assets",
  },
  {
    title: "Goals",
    value: "₹75K",
    change: "-8%",
    changeColor: "#EF4444",
    route: "/goals",
  },
  {
    title: "Liabilities",
    value: "₹45K",
    change: "+18%",
    changeColor: "#3B82F6",
    route: "/liabilities",
  },
];

export default function QuickLinks() {
  return (
    <ScrollView className="bg-gray-100 px-4 mt-4 pb-5 ">
      <View className="flex-row justify-between shadow  ">
        {cards.map((card, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(card.route as any)}
            className="w-[31%] rounded-2xl bg-white p-4 shadow  shadow-black/10 border border-gray-200 active:opacity-80 "
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-[11px] font-semibold uppercase text-gray-500">
                {card.title}
              </Text>

              <Ionicons
                name="chevron-forward"
                size={14}
                color="#9CA3AF"
              />
            </View>

            <Text className="mt-3 text-xl font-bold text-gray-900">
              {card.value}
            </Text>

            <Text
              className="mt-1 text-xs font-semibold"
              style={{ color: card.changeColor }}
            >
              {card.change}
            </Text>

            <Text className="mt-4 text-[11px] font-semibold text-green-600">
              View →
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}