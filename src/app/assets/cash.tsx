import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const transactions = [
  {
    id: 1,
    type: "ADD",
    amount: 5000,
    date: "02 Aug 2026",
    note: "Salary Cash",
  },
  {
    id: 2,
    type: "REMOVE",
    amount: 1200,
    date: "01 Aug 2026",
    note: "Groceries",
  },
  {
    id: 3,
    type: "ADD",
    amount: 3000,
    date: "30 Jul 2026",
    note: "Gift",
  },
];

export default function Cash() {
  const totalCash = transactions.reduce((sum, item) => {
    return item.type === "ADD"
      ? sum + item.amount
      : sum - item.amount;
  }, 0);

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}

      <View className="rounded-b-[35px] bg-green-600 px-5 pb-8 pt-14">

        <View className="flex-row items-center justify-between">

           <Link href="/assets">
                   
                      <Ionicons
                        name="arrow-back"
                        size={25}
                        color="white"
                      />
          
                   </Link>

          <Text className="text-xl font-bold text-white">
            Cash Wallet
          </Text>

          <Ionicons
            name="wallet-outline"
            size={24}
            color="white"
          />

        </View>

        <View className="mt-10 items-center">

          <Ionicons
            name="cash"
            size={70}
            color="white"
          />

          <Text className="mt-5 text-5xl font-bold text-white">
            ₹ {totalCash.toLocaleString()}
          </Text>

          <Text className="mt-2 text-green-100">
            Total Cash Available
          </Text>

        </View>

      </View>

      {/* Buttons */}

      <View className="-mt-8 flex-row justify-center gap-4">

        <Pressable className="rounded-2xl bg-green-600 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="add-circle"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Add Cash
            </Text>

          </View>

        </Pressable>

        <Pressable className="rounded-2xl bg-red-500 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="remove-circle"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Remove
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Transactions */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        Cash Transactions
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >
        {transactions.map((item) => (
          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-4 shadow shadow-black/10"
          >
            <View className="flex-row items-center justify-between">

              <View className="flex-row items-center">

                <View
                  className={`h-12 w-12 items-center justify-center rounded-full ${
                    item.type === "ADD"
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <Ionicons
                    name={
                      item.type === "ADD"
                        ? "arrow-down"
                        : "arrow-up"
                    }
                    size={22}
                    color={
                      item.type === "ADD"
                        ? "#16A34A"
                        : "#EF4444"
                    }
                  />
                </View>

                <View className="ml-4">

                  <Text className="font-bold text-gray-900">
                    {item.note}
                  </Text>

                  <Text className="text-sm text-gray-500">
                    {item.date}
                  </Text>

                </View>

              </View>

              <Text
                className={`text-lg font-bold ${
                  item.type === "ADD"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {item.type === "ADD" ? "+" : "-"}₹
                {item.amount.toLocaleString()}
              </Text>

            </View>
          </View>
        ))}

        <View className="h-20" />
      </ScrollView>
    </View>
  );
}