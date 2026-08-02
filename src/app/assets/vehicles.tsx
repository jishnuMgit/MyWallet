import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const vehicles = [
  {
    id: 1,
    name: "Hyundai Creta",
    type: "Car",
    value: 1450000,
    purchase: 1650000,
    year: "2024",
    depreciation: "-12.1%",
    positive: false,
  },
  {
    id: 2,
    name: "Royal Enfield Classic 350",
    type: "Bike",
    value: 185000,
    purchase: 210000,
    year: "2025",
    depreciation: "-11.9%",
    positive: false,
  },
  {
    id: 3,
    name: "TVS Jupiter",
    type: "Scooter",
    value: 72000,
    purchase: 89000,
    year: "2023",
    depreciation: "-19.1%",
    positive: false,
  },
];

export default function Vehicles() {
  const totalValue = vehicles.reduce(
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
            Vehicles
          </Text>

          <Ionicons
            name="car-sport"
            size={24}
            color="white"
          />

        </View>

        <View className="mt-8 items-center">

          <MaterialCommunityIcons
            name="car-multiple"
            size={70}
            color="white"
          />

          <Text className="mt-4 text-4xl font-bold text-white">
            ₹ {totalValue.toLocaleString()}
          </Text>

          <Text className="mt-2 text-green-100">
            Current Vehicle Value
          </Text>

          <View className="mt-5 rounded-full bg-white/20 px-5 py-2">
            <Text className="font-bold text-white">
              3 Vehicles Owned
            </Text>
          </View>

        </View>

      </View>

      {/* Action Buttons */}

      <View className="-mt-8 flex-row justify-center gap-4">

        <Pressable className="rounded-2xl bg-green-600 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="add-circle"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Add Vehicle
            </Text>

          </View>

        </Pressable>

        <Pressable className="rounded-2xl bg-red-500 px-8 py-4">

          <View className="flex-row items-center">

            <Ionicons
              name="trash"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              Sell
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Vehicle List */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        My Vehicles
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >

        {vehicles.map((item) => (

          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-5 shadow shadow-black/10"
          >

            <View className="flex-row justify-between">

              <View className="flex-row">

                <View className="h-14 w-14 items-center justify-center rounded-full bg-green-100">

                  <Ionicons
                    name={
                      item.type === "Car"
                        ? "car-sport"
                        : item.type === "Bike"
                        ? "bicycle"
                        : "rocket"
                    }
                    size={28}
                    color="#16A34A"
                  />

                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {item.name}
                  </Text>

                  <Text className="mt-1 text-gray-500">
                    {item.type} • {item.year}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    Purchase ₹{item.purchase.toLocaleString()}
                  </Text>

                </View>

              </View>

              <View className="items-end">

                <Text className="text-lg font-bold text-gray-900">
                  ₹{item.value.toLocaleString()}
                </Text>

                <Text
                  className={`mt-1 font-semibold ${
                    item.positive
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.depreciation}
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