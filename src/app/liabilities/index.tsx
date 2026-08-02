import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const liabilities = [
  {
    id: 1,
    title: "Home Loan",
    lender: "HDFC Bank",
    remaining: 2450000,
    emi: 28500,
    due: "12 Aug",
    color: "#EF4444",
  },
  {
    id: 2,
    title: "Car Loan",
    lender: "SBI",
    remaining: 485000,
    emi: 12500,
    due: "15 Aug",
    color: "#F97316",
  },
  {
    id: 3,
    title: "Credit Card",
    lender: "ICICI Bank",
    remaining: 38500,
    emi: 38500,
    due: "08 Aug",
    color: "#3B82F6",
  },
];

export default function Liabilities() {
  const total = liabilities.reduce(
    (sum, item) => sum + item.remaining,
    0
  );

  const totalEMI = liabilities.reduce(
    (sum, item) => sum + item.emi,
    0
  );

  return (
    <View className="flex-1 bg-gray-100">

      {/* Header */}

      <View className="rounded-b-[35px] bg-red-500 px-5 pb-8 pt-14">

        <View className="flex-row items-center justify-between">

          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
          />

          <Text className="text-xl font-bold text-white">
            Liabilities
          </Text>

          <MaterialCommunityIcons
            name="bank-transfer-out"
            size={26}
            color="white"
          />

        </View>

        <View className="mt-8 items-center">

          <MaterialCommunityIcons
            name="cash-remove"
            size={70}
            color="white"
          />

          <Text className="mt-5 text-4xl font-bold text-white">
            ₹ {total.toLocaleString()}
          </Text>

          <Text className="mt-2 text-red-100">
            Total Outstanding
          </Text>

          <View className="mt-5 rounded-full bg-white/20 px-5 py-2">

            <Text className="font-bold text-white">
              Monthly EMI ₹{totalEMI.toLocaleString()}
            </Text>

          </View>

        </View>

      </View>

      {/* Buttons */}

      <View className="-mt-8 flex-row justify-center gap-4">

        <Pressable className="rounded-2xl bg-red-500 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="add-circle"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Add Loan
            </Text>

          </View>

        </Pressable>

        <Pressable className="rounded-2xl bg-green-600 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="cash"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Pay EMI
            </Text>

          </View>

        </Pressable>

      </View>

      {/* List */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        My Liabilities
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >

        {liabilities.map((item) => (

          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-5 shadow shadow-black/10"
          >

            <View className="flex-row justify-between">

              <View className="flex-row">

                <View
                  className="h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${item.color}20`,
                  }}
                >
                  <MaterialCommunityIcons
                    name="bank"
                    size={28}
                    color={item.color}
                  />
                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {item.title}
                  </Text>

                  <Text className="mt-1 text-gray-500">
                    {item.lender}
                  </Text>

                  <Text className="mt-1 text-xs text-red-500">
                    Due: {item.due}
                  </Text>

                </View>

              </View>

              <View className="items-end">

                <Text className="text-lg font-bold text-red-500">
                  ₹{item.remaining.toLocaleString()}
                </Text>

                <Text className="mt-1 text-xs text-gray-500">
                  EMI ₹{item.emi.toLocaleString()}
                </Text>

              </View>

            </View>

          </View>

        ))}

        {/* Summary */}

        <View className="mb-8 rounded-3xl bg-red-50 p-5">

          <Text className="text-lg font-bold text-red-600">
            Debt Summary
          </Text>

          <View className="mt-5 flex-row justify-between">

            <View className="items-center">

              <Text className="text-gray-500">
                Loans
              </Text>

              <Text className="mt-1 text-xl font-bold">
                {liabilities.length}
              </Text>

            </View>

            <View className="items-center">

              <Text className="text-gray-500">
                Monthly EMI
              </Text>

              <Text className="mt-1 text-xl font-bold">
                ₹{totalEMI.toLocaleString()}
              </Text>

            </View>

            <View className="items-center">

              <Text className="text-gray-500">
                Outstanding
              </Text>

              <Text className="mt-1 text-xl font-bold text-red-500">
                ₹{total.toLocaleString()}
              </Text>

            </View>

          </View>

        </View>

        <View className="h-24" />

      </ScrollView>

    </View>
  );
}