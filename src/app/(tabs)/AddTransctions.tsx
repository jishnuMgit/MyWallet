import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

export default function AddTransaction() {
const [type, setType] = useState<"income" | "expense">("expense");
const [amount, setAmount] = useState("");
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="rounded-b-3xl bg-white px-5 pb-6 pt-14">
        <Text className="text-2xl font-bold text-center">
          Add Transaction
        </Text>
      </View>

      <View className="p-5">

        {/* Type */}
        <Text className="mb-2 text-gray-600 font-semibold">
          Type
        </Text>

        <View className="flex-row rounded-2xl bg-white p-1">
          <Pressable
            onPress={() => setType("income")}
            className={`flex-1 rounded-xl py-3 ${
              type === "income"
                ? "bg-green-600"
                : "bg-white"
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                type === "income"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Income
            </Text>
          </Pressable>

          <Pressable
            onPress={() => setType("expense")}
            className={`flex-1 rounded-xl py-3 ${
              type === "expense"
                ? "bg-red-500"
                : "bg-white"
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                type === "expense"
                  ? "text-white"
                  : "text-gray-600"
              }`}
            >
              Expense
            </Text>
          </Pressable>
        </View>

        {/* Amount */}

        <Text className="mt-6 mb-2 text-gray-600 font-semibold">
          Amount
        </Text>

      <TextInput
  keyboardType="numeric"
  placeholder="₹ 0.00"
  value={amount}
  onChangeText={setAmount}
  className="rounded-2xl bg-white px-4 py-4 text-3xl font-bold"
/>

        {/* Category */}

        <Text className="mt-6 mb-2 text-gray-600 font-semibold">
          Category
        </Text>

        <Pressable className="rounded-2xl bg-white p-4">
          <Text className="text-gray-500">
            Select Category
          </Text>
        </Pressable>

        {/* Buttons */}

        <Pressable
          className={`mt-10 rounded-2xl py-4 ${
            type === "income"
              ? "bg-green-600"
              : "bg-red-500"
          }`}
        >
          <Text className="text-center text-white text-lg font-bold">
            Save Transaction
          </Text>
        </Pressable>

      <Pressable
  className="mt-4"
  onPress={() =>
    router.push({
      pathname: type === "income" ? "/income/add" : "/expense/add",
      params: {
        amount,
        type,
      },
    })
  }
>
  <Text className="text-center text-green-600 font-semibold">
    Add More Details
  </Text>
</Pressable>

      </View>
    </ScrollView>
  );
}