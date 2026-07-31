import React from "react";
import { View, Text } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const cards = [
  {
    title: "Income",
    amount: "₹ 1,20,000",
    icon: <FontAwesome name="rupee" size={16} color="#16A34A" />,
    bg: "bg-green-100",
  },
  {
    title: "Expenses",
    amount: "₹ 75,410",
    icon: <Ionicons name="arrow-down" size={16} color="#EF4444" />,
    bg: "bg-red-100",
  },
  {
    title: "Savings",
    amount: "₹ 44,570",
    icon: (
      <MaterialCommunityIcons
        name="shield-check"
        size={18}
        color="#22C55E"
      />
    ),
    bg: "bg-green-100",
  },
  {
    title: "Net Worth",
    amount: "₹ 12,45,600",
    icon: (
      <MaterialCommunityIcons
        name="chart-box"
        size={18}
        color="#6366F1"
      />
    ),
    bg: "bg-indigo-100",
  },
];

const SummaryGrid = () => {
  return (
    <View className="-mt-10 px-5">
      <View className="flex-row flex-wrap justify-between">
        {cards.map((item, index) => (
          <View
            key={index}
            className=" shoadow-xl shadow-black/20  w-[48%] bg-white rounded-3xl p-4 mb-4 shadow"
          >
            <View className="flex-row items-center">
              <View
                className={`${item.bg} w-10 h-10 rounded-full items-center justify-center`}
              >
                {item.icon}
              </View>

              <View className="ml-3">
                <Text className="text-gray-500 text-xs font-medium">
                  {item.title}
                </Text>

                <Text className="text-gray-900 text-lg font-bold mt-1">
                  {item.amount}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default SummaryGrid;