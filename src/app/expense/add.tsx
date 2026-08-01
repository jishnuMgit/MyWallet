import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

export default function AddExpense() {
const { amount, type } = useLocalSearchParams<{
  amount: string;
  type: string;
}>();
const [transactionAmount, setTransactionAmount] = useState(amount ?? "");
 
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="rounded-b-3xl bg-white px-5 pb-6 pt-14">
        <View className="flex-row items-center">
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="chevron-back"
              size={24}
              color="#111827"
            />
          </Pressable>

          <Text className="flex-1 text-center text-2xl font-bold text-gray-900 mr-6">
            Add Expense
          </Text>
        </View>
      </View>

      <View className="p-5">

        {/* Amount */}
        <Text className="mb-2 text-sm font-semibold text-gray-500">
          Amount
        </Text>

        <TextInput
          value={transactionAmount}
          onChangeText={setTransactionAmount}
          keyboardType="numeric"
          className="rounded-2xl bg-white p-4 text-4xl font-bold"
        />

        {/* Category */}
        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-500">
          Category
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Ionicons
                name="fast-food"
                size={20}
                color="#F97316"
              />
            </View>

            <Text className="text-base font-medium">
              Food & Dining
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Account */}
        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-500">
          Account
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              <Ionicons
                name="card"
                size={20}
                color="#111827"
              />
            </View>

            <Text className="text-base">
              ICICI Bank •••• 9876
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Date */}
        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-500">
          Date
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <Text className="text-base">
            May 24, 2026
          </Text>

          <Ionicons
            name="calendar-outline"
            size={22}
            color="#6B7280"
          />
        </Pressable>

        {/* Payment Method */}
        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-500">
          Payment Method
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <Text className="text-base">
            UPI
          </Text>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Notes */}
        <Text className="mt-6 mb-2 text-sm font-semibold text-gray-500">
          Notes
        </Text>

        <TextInput
          placeholder="Lunch with team"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className="rounded-2xl bg-white p-4"
        />

        {/* Save */}
        <Pressable className="mt-10 rounded-2xl bg-red-500 py-4">
          <Text className="text-center text-lg font-bold text-white">
            Save Expense
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}