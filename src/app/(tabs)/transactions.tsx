import React from "react";
import {
  View,
  Text,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const transactions = [
  {
    id: 1,
    title: "Starbucks Coffee",
    category: "Food & Dining",
    amount: "- ₹450",
    time: "08:30 AM",
    icon: "coffee",
    color: "#EF4444",
  },
  {
    id: 2,
    title: "Salary from ABC Pvt Ltd",
    category: "Salary",
    amount: "+ ₹60,000",
    time: "09:00 AM",
    icon: "cash",
    color: "#16A34A",
  },
  {
    id: 3,
    title: "Uber Ride",
    category: "Travel",
    amount: "- ₹220",
    time: "08:15 PM",
    icon: "car",
    color: "#EF4444",
  },
  {
    id: 4,
    title: "Amazon Shopping",
    category: "Shopping",
    amount: "- ₹1,999",
    time: "08:45 PM",
    icon: "cart",
    color: "#EF4444",
  },
  {
    id: 5,
    title: "Freelance Payment",
    category: "Freelance",
    amount: "+ ₹15,000",
    time: "11:20 AM",
    icon: "briefcase",
    color: "#16A34A",
  },
];

export default function Transactions() {
  return (
    <ScrollView className="flex-1 bg-gray-100 pb-24">
      {/* Header */}
      <View className="bg-white px-5 pt-14 pb-6 rounded-b-3xl">
        <View className="flex-row items-center">
          <Ionicons name="chevron-back" size={24} color="#111827" />

          <Text className="flex-1 text-center text-xl font-bold text-gray-900 mr-6">
            Transactions
          </Text>
        </View>

        {/* Filters */}
        <View className="mt-6 flex-row justify-between">
          <View className="flex-row items-center rounded-xl bg-gray-100 px-4 py-3">
            <Text className="mr-2 font-medium text-gray-700">
              This Month
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#6B7280"
            />
          </View>

          <View className="flex-row items-center rounded-xl bg-gray-100 px-4 py-3">
            <Text className="mr-2 font-medium text-gray-700">
              All Categories
            </Text>
            <Ionicons
              name="chevron-down"
              size={16}
              color="#6B7280"
            />
          </View>
        </View>

        {/* Income & Expense */}
        <View className="mt-5 flex-row justify-between">
          <View className="w-[48%] rounded-2xl bg-green-50 p-4">
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-down-circle"
                size={18}
                color="#16A34A"
              />
              <Text className="ml-2 text-gray-500">Income</Text>
            </View>

            <Text className="mt-2 text-2xl font-bold text-green-600">
              ₹1,20,000
            </Text>
          </View>

          <View className="w-[48%] rounded-2xl bg-red-50 p-4">
            <View className="flex-row items-center">
              <Ionicons
                name="arrow-up-circle"
                size={18}
                color="#EF4444"
              />
              <Text className="ml-2 text-gray-500">Expenses</Text>
            </View>

            <Text className="mt-2 text-2xl font-bold text-red-500">
              ₹75,430
            </Text>
          </View>
        </View>
      </View>

      {/* Transactions */}
      <View className="px-5 py-5">
        <Text className="mb-4 text-gray-500 font-semibold">
          May 24, 2024
        </Text>

        {transactions.map((item) => (
          <View
            key={item.id}
            className="mb-4 flex-row items-center rounded-2xl bg-white p-4"
          >
            <View className="mr-4 h-14 w-14 items-center justify-center rounded-full bg-green-100">
              {item.icon === "coffee" && (
                <FontAwesome5
                  name="coffee"
                  size={18}
                  color="#16A34A"
                />
              )}

              {item.icon === "cash" && (
                <Ionicons
                  name="cash"
                  size={22}
                  color="#16A34A"
                />
              )}

              {item.icon === "car" && (
                <Ionicons
                  name="car"
                  size={22}
                  color="#16A34A"
                />
              )}

              {item.icon === "cart" && (
                <Ionicons
                  name="cart"
                  size={22}
                  color="#16A34A"
                />
              )}

              {item.icon === "briefcase" && (
                <MaterialCommunityIcons
                  name="briefcase"
                  size={22}
                  color="#16A34A"
                />
              )}
            </View>

            <View className="flex-1">
              <Text className="text-base font-bold text-gray-900">
                {item.title}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                {item.category}
              </Text>
            </View>

            <View className="items-end">
              <Text
                style={{ color: item.color }}
                className="text-lg font-bold"
              >
                {item.amount}
              </Text>

              <Text className="mt-1 text-xs text-gray-400">
                {item.time}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}