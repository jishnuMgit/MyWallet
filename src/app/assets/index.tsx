import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

const assets = [
  {
    title: "Cash",
    value: "₹ 45,000",
    icon: "cash",
    color: "bg-green-100",
    iconColor: "#22C55E",
    route: "/assets/cash",
  },
  {
    title: "Bank Accounts",
    value: "₹ 3,20,500",
    icon: "bank",
    color: "bg-blue-100",
    iconColor: "#3B82F6",
    route: "/assets/bank-accounts",
  },
  {
    title: "Investments",
    value: "₹ 8,25,200",
    icon: "chart-line",
    color: "bg-orange-100",
    iconColor: "#F59E0B",
    route: "/assets/investments",
  },
  {
    title: "Gold",
    value: "₹ 2,45,000",
    icon: "gold",
    color: "bg-yellow-100",
    iconColor: "#EAB308",
    route: "/assets/gold",
  },
  // {
  //   title: "Crypto",
  //   value: "₹ 1,25,400",
  //   icon: "bitcoin",
  //   color: "bg-sky-100",
  //   iconColor: "#0EA5E9",
  //   route: "/assets/Crypto",
  // },
  {
    title: "Real Estate",
    value: "₹ 2,50,000",
    icon: "home",
    color: "bg-green-100",
    iconColor: "#16A34A",
    route: "/assets/realestate",
  },
  {
    title: "Vehicles",
    value: "₹ 2,50,000",
    icon: "car",
    color: "bg-green-100",
    iconColor: "#16A34A",
    route: "/assets/vehicles",
  },
];

export default function Assets() {
  return (
    <ScrollView className="flex-1 bg-gray-100">
      {/* Header */}
      {/* Header */}
      <View className="rounded-b-3xl bg-white px-5 pb-6 pt-14 shadow">
        <View className="flex-row items-center justify-between">
          <Pressable
            onPress={() => router.push("/home")}
            className="h-10 w-10 items-center justify-center rounded-full bg-gray-100"
          >
            <Ionicons name="chevron-back" size={22} color="#111827" />
          </Pressable>

          <Text className="flex-1 text-center text-2xl font-bold text-gray-900">
            My Assets
          </Text>

          <Ionicons name="notifications-outline" size={24} color="#374151" />
        </View>

        <Text className="mt-6 text-gray-500">Total Assets Value</Text>

        <Text className="mt-1 text-4xl font-bold text-gray-900">
          ₹18,75,600
        </Text>
      </View>

      {/* Assets List */}
      <View className="p-5">
        {assets.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => router.push(item.route as any)}
            className="mb-4 flex-row items-center rounded-2xl bg-white p-4 shadow shadow-black/10"
          >
            <View
              className={`mr-4 h-14 w-14 items-center justify-center rounded-full ${item.color}`}
            >
              {item.icon === "cash" && (
                <MaterialCommunityIcons
                  name="cash"
                  size={26}
                  color={item.iconColor}
                />
              )}

              {item.icon === "bank" && (
                <MaterialCommunityIcons
                  name="bank"
                  size={26}
                  color={item.iconColor}
                />
              )}

              {item.icon === "chart-line" && (
                <MaterialCommunityIcons
                  name="chart-line"
                  size={26}
                  color={item.iconColor}
                />
              )}

              {item.icon === "gold" && (
                <MaterialCommunityIcons
                  name="gold"
                  size={26}
                  color={item.iconColor}
                />
              )}

              {item.icon === "bitcoin" && (
                <FontAwesome5 name="bitcoin" size={22} color={item.iconColor} />
              )}

              {item.icon === "home" && (
                <Ionicons name="home" size={24} color={item.iconColor} />
              )}

              {item.icon === "car" && (
                <FontAwesome5 name="car" size={24} color={item.iconColor} />
              )}
            </View>

            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">
                {item.title}
              </Text>

              <Text className="mt-1 text-base font-bold text-gray-600">
                {item.value}
              </Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#9CA3AF" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
