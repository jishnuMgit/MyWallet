import React from "react";
import { View, Text, ScrollView } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";

const transactions = [
  {
    id: 1,
    title: "Starbucks Coffee",
    date: "Today, 9:25 AM",
    amount: "- ₹450",
    income: false,
    icon: "coffee",
  },
  {
    id: 2,
    title: "Salary from ABC Pvt Ltd",
    date: "May 14, 2026",
    amount: "+ ₹60,000",
    income: true,
    icon: "wallet",
  },
  {
    id: 3,
    title: "Amazon Shopping",
    date: "Yesterday",
    amount: "- ₹2,350",
    income: false,
    icon: "shopping-bag",
  },
  {
    id: 4,
    title: "Netflix",
    date: "Yesterday",
    amount: "- ₹649",
    income: false,
    icon: "play",
  },
  {
    id: 5,
    title: "Electricity Bill",
    date: "May 12, 2026",
    amount: "- ₹1,890",
    income: false,
    icon: "bolt",
  },
  {
    id: 6,
    title: "Freelance Payment",
    date: "May 10, 2026",
    amount: "+ ₹18,000",
    income: true,
    icon: "money-bill-wave",
  },
  {
    id: 7,
    title: "Petrol",
    date: "May 8, 2026",
    amount: "- ₹2,000",
    income: false,
    icon: "gas-pump",
  },
  {
    id: 8,
    title: "Restaurant",
    date: "May 7, 2026",
    amount: "- ₹980",
    income: false,
    icon: "utensils",
  },
];

const RecentTransactions = () => {
  return (
    <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow-lg shadow-black/30">
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-900">
          Recent Transactions
        </Text>

        <Link href="/transactions"
        >
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color="#9CA3AF"
        />
        </Link>
      </View>

      <ScrollView
        className="max-h-[500px]"
        showsVerticalScrollIndicator={false}
      >
        {transactions.map((item) => (
          <View
            key={item.id}
            className="mb-4 flex-row items-center justify-between"
          >
            <View className="flex-row items-center">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <FontAwesome5
                  name={item.icon}
                  size={18}
                  color="#16A34A"
                />
              </View>

              <View className="ml-3">
                <Text className="text-base font-semibold text-gray-900">
                  {item.title}
                </Text>

                <Text className="mt-1 text-xs text-gray-400">
                  {item.date}
                </Text>
              </View>
            </View>

            <Text
              className={`text-base font-bold ${
                item.income ? "text-green-600" : "text-red-500"
              }`}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RecentTransactions;