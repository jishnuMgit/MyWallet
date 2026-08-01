import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function AddIncome() {
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

          <Text className="mr-6 flex-1 text-center text-2xl font-bold text-gray-900">
            Add Income
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

        {/* Income Source */}
        <Text className="mb-2 mt-6 text-sm font-semibold text-gray-500">
          Income Source
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Ionicons
                name="briefcase"
                size={20}
                color="#16A34A"
              />
            </View>

            <Text className="text-base">Freelance</Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Category */}
        <Text className="mb-2 mt-6 text-sm font-semibold text-gray-500">
          Category
        </Text>

        <Pressable className="flex-row items-center justify-between rounded-2xl bg-white p-4">
          <View className="flex-row items-center">
            <View className="mr-3 h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Ionicons
                name="wallet"
                size={20}
                color="#2563EB"
              />
            </View>

            <Text className="text-base">
              Freelance Work
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Account */}
        <Text className="mb-2 mt-6 text-sm font-semibold text-gray-500">
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
              HDFC Bank •••• 5678
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={20}
            color="#9CA3AF"
          />
        </Pressable>

        {/* Date */}
        <Text className="mb-2 mt-6 text-sm font-semibold text-gray-500">
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

        {/* Notes */}
        <Text className="mb-2 mt-6 text-sm font-semibold text-gray-500">
          Notes
        </Text>

        <TextInput
          placeholder="UI/UX project payment"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          className="rounded-2xl bg-white p-4"
        />

        {/* Save */}
        <Pressable className="mt-10 rounded-2xl bg-green-600 py-4">
          <Text className="text-center text-lg font-bold text-white">
            Save Income
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}