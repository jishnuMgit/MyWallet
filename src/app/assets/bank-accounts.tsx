import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

const cryptoAssets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    quantity: "0.254 BTC",
    value: 2850000,
    change: "+5.82%",
    positive: true,
    icon: "bitcoin",
    color: "#F7931A",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    quantity: "3.20 ETH",
    value: 965000,
    change: "+2.14%",
    positive: true,
    icon: "ethereum",
    color: "#627EEA",
  },
  {
    id: 3,
    name: "Solana",
    symbol: "SOL",
    quantity: "45 SOL",
    value: 182000,
    change: "-3.75%",
    positive: false,
    icon: "currency-usd",
    color: "#8B5CF6",
  },
];

export default function Crypto() {
  const totalValue = cryptoAssets.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <View className="flex-1 bg-gray-100">

      {/* Header */}

      <View className="rounded-b-[35px] bg-green-700 px-5 pb-8 pt-14">

        <View className="flex-row items-center justify-between">

        <Link href="/assets">
               
                  <Ionicons
                    name="arrow-back"
                    size={25}
                    color="white"
                  />
      
               </Link>

          <Text className="text-xl font-bold text-white">
            Crypto Portfolio
          </Text>

          <MaterialCommunityIcons
            name="bitcoin"
            size={26}
            color="white"
          />

        </View>

        <View className="mt-8 items-center">

          <MaterialCommunityIcons
            name="bitcoin"
            size={70}
            color="#FACC15"
          />

          <Text className="mt-4 text-4xl font-bold text-white">
            ₹ {totalValue.toLocaleString()}
          </Text>

          <Text className="mt-2 text-green-100">
            Total Crypto Value
          </Text>

          <View className="mt-5 rounded-full bg-white/20 px-5 py-2">
            <Text className="font-bold text-white">
              Portfolio +18.65%
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
              Buy Crypto
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
              Sell Crypto
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Portfolio */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        My Coins
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >

        {cryptoAssets.map((coin) => (

          <View
            key={coin.id}
            className="mb-4 rounded-3xl bg-white p-5 shadow shadow-black/10"
          >

            <View className="flex-row justify-between">

              <View className="flex-row">

                <View
                  className="h-14 w-14 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${coin.color}20` }}
                >

                  {coin.icon === "bitcoin" ? (
                    <FontAwesome5
                      name="bitcoin"
                      size={26}
                      color={coin.color}
                    />
                  ) : coin.icon === "ethereum" ? (
                    <FontAwesome5
                      name="ethereum"
                      size={26}
                      color={coin.color}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="currency-usd"
                      size={26}
                      color={coin.color}
                    />
                  )}

                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {coin.name}
                  </Text>

                  <Text className="text-gray-500">
                    {coin.symbol}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    {coin.quantity}
                  </Text>

                </View>

              </View>

              <View className="items-end">

                <Text className="text-lg font-bold text-gray-900">
                  ₹{coin.value.toLocaleString()}
                </Text>

                <Text
                  className={`mt-1 font-semibold ${
                    coin.positive
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {coin.change}
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