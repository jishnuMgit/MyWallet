import React from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const menuItems = [
  {
    title: "Personal Information",
    subtitle: "Name, email, phone",
    icon: "person-outline",
    route: "/settings/profile",
  },
  {
    title: "Security",
    subtitle: "Password & authentication",
    icon: "lock-closed-outline",
    route: "/settings/security",
  },
  {
    title: "Linked Accounts",
    subtitle: "Bank & payment accounts",
    icon: "wallet-outline",
    route: "/settings/accounts",
  },
  {
    title: "Payment Methods",
    subtitle: "Cards & UPI",
    icon: "card-outline",
    route: "/settings/payment",
  },
  {
    title: "Financial Goals",
    subtitle: "Manage your goals",
    icon: "flag-outline",
    route: "/goals",
  },
  {
    title: "Notifications",
    subtitle: "Alerts & reminders",
    icon: "notifications-outline",
    route: "/settings/notifications",
  },
  {
    title: "Help & Support",
    subtitle: "FAQs & Contact us",
    icon: "help-circle-outline",
    route: "/settings/help",
  },
];
const StatCard = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => (
  <View className="flex-1 mx-1 rounded-2xl bg-white p-4 shadow shadow-black/10">
    <Text className="text-center text-xs text-gray-500">
      {title}
    </Text>

    <Text className="mt-2 text-center text-lg font-bold text-gray-900">
      {value}
    </Text>
  </View>
);

export default function Profile() {
  return (
    <ScrollView
      className="flex-1 bg-gray-100"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <LinearGradient
colors={["#15803D", "#16A34A", "#22C55E", "#4ADE80","#86EFAC","#DCFCE7"]}      start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        className="rounded-b-[90px] px-6 pt-14 pb-12 "
      >
        {/* Top */}

        <View className="flex-row items-center justify-between">

          <Text className="text-2xl font-bold text-white">
            Profile
          </Text>

          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
          />

        </View>

        {/* Avatar */}

        <View className="mt-8 items-center">

          <Image
            source={{
              uri: "https://i.pravatar.cc/300",
            }}
            className="h-28 w-28 rounded-full border-4 border-white"
          />

          <Text className="mt-4 text-3xl font-bold text-white">
            Jishnu M
          </Text>

          <Text className="mt-2 text-base text-green-100">
            jishnu@email.com
          </Text>

          {/* <Pressable className="mt-5 rounded-full bg-white px-6 py-3">

            <Text className="font-semibold text-green-700">
              Edit Profile
            </Text>

          </Pressable> */}

        </View>

      </LinearGradient>

      {/* Statistics */}

      <View className="-mt-8 flex-row px-5">

        <StatCard
          title="Transactions"
          value="245"
        />

        <StatCard
          title="Savings"
          value="₹44.5K"
        />

        <StatCard
          title="Goals"
          value="6"
        />

      </View>

      {/* Section Title */}

      <View className="mt-8 px-5">

        <Text className="text-xl font-bold text-gray-900">
          Account
        </Text>

        <Text className="mt-1 text-gray-500">
          Manage your personal information and settings.
        </Text>

      </View>

            {/* Menu */}

      <View className="mt-5 px-5">
        {menuItems.map((item, index) => (
          <Pressable
            key={index}
            className="mb-4 flex-row items-center rounded-3xl bg-white p-5 shadow shadow-black/10"
          >
            {/* Icon */}

            <View className="mr-4 h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <Ionicons
                name={item.icon as any}
                size={24}
                color="#16A34A"
              />
            </View>

            {/* Text */}

            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">
                {item.title}
              </Text>

              <Text className="mt-1 text-sm text-gray-500">
                {item.subtitle}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={22}
              color="#9CA3AF"
            />
          </Pressable>
        ))}
      </View>

      {/* App Preferences */}

      <View className="mt-3 px-5">
        <Text className="mb-4 text-xl font-bold text-gray-900">
          Preferences
        </Text>

        <View className="rounded-3xl bg-white p-5 shadow shadow-black/10">

          <View className="mb-5 flex-row items-center justify-between">

            <View className="flex-row items-center">

              <Ionicons
                name="moon-outline"
                size={22}
                color="#374151"
              />

              <Text className="ml-3 text-base font-medium">
                Dark Mode
              </Text>

            </View>

            <Text className="font-semibold text-green-600">
              Off
            </Text>

          </View>

          <View className="mb-5 h-px bg-gray-100" />

          <View className="mb-5 flex-row items-center justify-between">

            <View className="flex-row items-center">

              <Ionicons
                name="language-outline"
                size={22}
                color="#374151"
              />

              <Text className="ml-3 text-base font-medium">
                Language
              </Text>

            </View>

            <Text className="font-semibold text-gray-500">
              English
            </Text>

          </View>

          <View className="mb-5 h-px bg-gray-100" />

          <View className="flex-row items-center justify-between">

            <View className="flex-row items-center">

              <Ionicons
                name="color-palette-outline"
                size={22}
                color="#374151"
              />

              <Text className="ml-3 text-base font-medium">
                Theme
              </Text>

            </View>

            <Text className="font-semibold text-gray-500">
              Green
            </Text>

          </View>

        </View>
      </View>
      {/* Finance Summary */}

      <View className="mt-6 px-5">

        <Text className="mb-4 text-xl font-bold text-gray-900">
          Finance Summary
        </Text>

        <View className="flex-row justify-between">

          <View className="w-[48%] rounded-3xl bg-white p-5 shadow shadow-black/10">

            <Ionicons
              name="wallet"
              size={28}
              color="#16A34A"
            />

            <Text className="mt-4 text-gray-500">
              Net Worth
            </Text>

            <Text className="mt-2 text-2xl font-bold text-gray-900">
              ₹18.7L
            </Text>

          </View>

          <View className="w-[48%] rounded-3xl bg-white p-5 shadow shadow-black/10">

            <Ionicons
              name="trending-up"
              size={28}
              color="#2563EB"
            />

            <Text className="mt-4 text-gray-500">
              Monthly Saving
            </Text>

            <Text className="mt-2 text-2xl font-bold text-gray-900">
              ₹44.5K
            </Text>

          </View>

        </View>

      </View>

      {/* Premium Card */}

      <View className="mx-5 mt-6 rounded-3xl bg-green-600 p-6">

        <Text className="text-xl font-bold text-white">
          Wallet Pro
        </Text>

        <Text className="mt-3 leading-6 text-green-100">
          Unlock unlimited budgets, AI spending insights,
          cloud backup, recurring transactions, and advanced
          analytics.
        </Text>

        <Pressable className="mt-5 rounded-full bg-white py-3">

          <Text className="text-center font-bold text-green-700">
            Upgrade Now
          </Text>

        </Pressable>

      </View>

      {/* Logout */}

      <View className="px-5 mt-8">

        <Pressable className="flex-row items-center justify-center rounded-2xl bg-red-500 py-4">

          <Ionicons
            name="log-out-outline"
            size={22}
            color="white"
          />

          <Text className="ml-2 text-lg font-bold text-white">
            Logout
          </Text>

        </Pressable>

      </View>

      {/* Footer */}

      <View className="items-center py-10">

        <Text className="text-gray-400">
          MyWallet
        </Text>

        <Text className="mt-2 text-gray-400">
          Version 1.0.0
        </Text>

        <Text className="mt-4 text-gray-500">
          Made with ❤️ using React Native & Expo
        </Text>

      </View>

    </ScrollView>
  );
}