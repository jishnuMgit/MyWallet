import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const properties = [
  {
    id: 1,
    name: "Family House",
    location: "Kottayam, Kerala",
    type: "Residential",
    value: 8500000,
    appreciation: "+18.4%",
    positive: true,
  },
  {
    id: 2,
    name: "Commercial Shop",
    location: "Kochi, Kerala",
    type: "Commercial",
    value: 4500000,
    appreciation: "+9.7%",
    positive: true,
  },
  {
    id: 3,
    name: "Farm Land",
    location: "Idukki, Kerala",
    type: "Agricultural",
    value: 3200000,
    appreciation: "-2.3%",
    positive: false,
  },
];

export default function RealEstate() {
  const totalValue = properties.reduce(
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
            Real Estate
          </Text>

          <Ionicons
            name="home"
            size={24}
            color="white"
          />

        </View>

        <View className="mt-8 items-center">

          <MaterialCommunityIcons
            name="home-city"
            size={70}
            color="white"
          />

          <Text className="mt-4 text-4xl font-bold text-white">
            ₹ {totalValue.toLocaleString()}
          </Text>

          <Text className="mt-2 text-green-100">
            Total Property Value
          </Text>

          <View className="mt-5 rounded-full bg-white/20 px-5 py-2">

            <Text className="font-bold text-white">
              Appreciation +14.8%
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
              Add Property
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
              Sell Property
            </Text>

          </View>

        </Pressable>

      </View>

      {/* Property List */}

      <Text className="mt-8 px-5 text-xl font-bold text-gray-900">
        My Properties
      </Text>

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >

        {properties.map((item) => (

          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-5 shadow shadow-black/10"
          >

            <View className="flex-row justify-between">

              <View className="flex-row">

                <View className="h-14 w-14 items-center justify-center rounded-full bg-green-100">

                  <Ionicons
                    name="home"
                    size={28}
                    color="#16A34A"
                  />

                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {item.name}
                  </Text>

                  <Text className="mt-1 text-gray-500">
                    {item.location}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    {item.type}
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
                  {item.appreciation}
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