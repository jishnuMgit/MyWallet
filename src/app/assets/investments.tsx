import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const investments = [
  {
    id: 1,
    name: "Reliance Industries",
    type: "Stock",
    quantity: "25 Shares",
    value: 75250,
    profit: "+12.8%",
    positive: true,
  },
  {
    id: 2,
    name: "HDFC Flexi Cap",
    type: "Mutual Fund",
    quantity: "150 Units",
    value: 43200,
    profit: "+8.4%",
    positive: true,
  },
  {
    id: 3,
    name: "Nifty ETF",
    type: "ETF",
    quantity: "35 Units",
    value: 21800,
    profit: "-2.1%",
    positive: false,
  },
];

export default function Investments() {
  const totalValue = investments.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <View className="flex-1 bg-gray-100">

      {/* Header */}

      <View className="rounded-b-[35px] bg-green-600 px-5 pb-8 pt-14">

        <View className="flex-row items-center justify-between">


<Link href="/assets">

          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
          />

</Link>

          <Text className="text-xl font-bold text-white">
            Investments
          </Text>

          <Ionicons
            name="analytics"
            size={24}
            color="white"
          />

        </View>

        <View className="mt-8 items-center">

          <MaterialCommunityIcons
            name="finance"
            size={70}
            color="white"
          />

          <Text className="mt-4 text-5xl font-bold text-white">
            ₹ {totalValue.toLocaleString()}
          </Text>

          <Text className="mt-2 text-green-100">
            Total Investment Value
          </Text>

          <View className="mt-5 rounded-full bg-white/20 px-5 py-2">

            <Text className="font-bold text-white">
              Overall Profit +9.6%
            </Text>

          </View>

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
              Invest
            </Text>

          </View>

        </Pressable>

        <Pressable className="rounded-2xl bg-red-500 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="trending-down"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Sell
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Portfolio */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        My Portfolio
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >
        {investments.map((item) => (
          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-4 shadow shadow-black/10"
          >

            <View className="flex-row items-center justify-between">

              <View className="flex-row items-center">

                <View className="h-14 w-14 items-center justify-center rounded-full bg-green-100">

                  <MaterialCommunityIcons
                    name="chart-line"
                    size={28}
                    color="#16A34A"
                  />

                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {item.name}
                  </Text>

                  <Text className="text-gray-500">
                    {item.type}
                  </Text>

                  <Text className="text-xs text-gray-400">
                    {item.quantity}
                  </Text>

                </View>

              </View>

              <View className="items-end">

                <Text className="text-lg font-bold text-gray-900">
                  ₹{item.value.toLocaleString()}
                </Text>

                <Text
                  className={`font-semibold ${
                    item.positive
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.profit}
                </Text>

              </View>

            </View>

          </View>
        ))}

        <View className="h-24" />

      </ScrollView>

    </View>
  );
}