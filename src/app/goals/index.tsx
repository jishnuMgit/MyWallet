import React from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const goals = [
  {
    id: 1,
    title: "New Car",
    emoji: "🚗",
    target: 1500000,
    saved: 920000,
    days: 180,
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Dubai Trip",
    emoji: "✈️",
    target: 250000,
    saved: 165000,
    days: 75,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Gaming PC",
    emoji: "🖥️",
    target: 180000,
    saved: 95000,
    days: 60,
    color: "bg-purple-500",
  },
  {
    id: 4,
    title: "Emergency Fund",
    emoji: "🛡️",
    target: 500000,
    saved: 410000,
    days: 250,
    color: "bg-orange-500",
  },
];

export default function Goals() {
  const totalSaved = goals.reduce((sum, g) => sum + g.saved, 0);
  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);

  const overall = Math.round((totalSaved / totalTarget) * 100);

  return (
    <ScrollView className="flex-1 bg-gray-100">

      {/* Header */}

      <View className="rounded-b-[35px] bg-green-600 px-5 pb-10 pt-14">

        <View className="flex-row items-center justify-between">

          <Text className="text-2xl font-bold text-white">
            My Goals
          </Text>

          <Ionicons
            name="trophy"
            size={28}
            color="white"
          />

        </View>

        <Text className="mt-4 text-5xl">
          😊
        </Text>

        <Text className="mt-3 text-3xl font-bold text-white">
          {overall}% Completed
        </Text>

        <Text className="mt-2 text-green-100">
          Keep saving! You're getting closer every day.
        </Text>

        <View className="mt-6 h-3 overflow-hidden rounded-full bg-white/30">

          <View
            className="h-full rounded-full bg-white"
            style={{ width: `${overall}%` }}
          />

        </View>

        <View className="mt-5 flex-row justify-between">

          <View>

            <Text className="text-green-100">
              Saved
            </Text>

            <Text className="text-2xl font-bold text-white">
              ₹{totalSaved.toLocaleString()}
            </Text>

          </View>

          <View className="items-end">

            <Text className="text-green-100">
              Target
            </Text>

            <Text className="text-2xl font-bold text-white">
              ₹{totalTarget.toLocaleString()}
            </Text>

          </View>

        </View>

      </View>

      {/* Add Goal */}

      <View className="-mt-7 items-center">

        <Pressable className="rounded-full bg-green-600 px-8 py-4">

          <Link href="/goals/addgoal" className="flex-row items-center">

            <Ionicons
              name="add-circle"
              size={22}
              color="white"
            />

            <Text className="ml-2 font-bold text-white">
              New Goal
            </Text>

          </Link>

        </Pressable>

      </View>

      {/* Goal Cards */}

      <View className="mt-8 px-5">

        {goals.map((goal) => {

          const progress = Math.round(
            (goal.saved / goal.target) * 100
          );

          return (
            <View
              key={goal.id}
              className="mb-5 rounded-3xl bg-white p-5 shadow shadow-black/10"
            >

              <View className="flex-row justify-between">

                <View>

                  <Text className="text-4xl">
                    {goal.emoji}
                  </Text>

                  <Text className="mt-3 text-xl font-bold">
                    {goal.title}
                  </Text>

                </View>

                <MaterialCommunityIcons
                  name="target"
                  size={32}
                  color="#16A34A"
                />

              </View>

              <View className="mt-5 flex-row justify-between">

                <View>

                  <Text className="text-gray-500">
                    Saved
                  </Text>

                  <Text className="font-bold text-green-600">
                    ₹{goal.saved.toLocaleString()}
                  </Text>

                </View>

                <View className="items-end">

                  <Text className="text-gray-500">
                    Target
                  </Text>

                  <Text className="font-bold">
                    ₹{goal.target.toLocaleString()}
                  </Text>

                </View>

              </View>

              <View className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">

                <View
                  className={`${goal.color} h-full rounded-full`}
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </View>

              <View className="mt-4 flex-row justify-between">

                <Text className="font-bold text-green-600">
                  {progress}% Completed
                </Text>

                <Text className="text-gray-500">
                  ⏳ {goal.days} days left
                </Text>

              </View>

            </View>
          );
        })}
      </View>

      <View className="h-24" />

    </ScrollView>
  );
}