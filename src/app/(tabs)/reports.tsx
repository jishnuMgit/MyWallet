import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BarChart, PieChart } from "react-native-gifted-charts";
import ReportCard from "../reports/category";
import Monthly from "../reports/monthly";

const summary = {
  income: 120000,
  expense: 75430,
  savings: 44570,
};





export default function Reports() {
  return (
    <ScrollView
      className="flex-1 pb-24 bg-gray-100"
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <View className="rounded-b-3xl bg-white px-5 pb-6 pt-14 shadow">

        <View className="flex-row items-center justify-between">

          <Pressable>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#111827"
            />
          </Pressable>

          <Text className="text-2xl font-bold">
            Reports
          </Text>

          <Ionicons
            name="calendar-outline"
            size={24}
            color="#111827"
          />

        </View>

        {/* Month Selector */}

        <Pressable className="mt-6 flex-row items-center justify-center rounded-2xl bg-green-50 py-3">

          <Ionicons
            name="calendar"
            size={18}
            color="#16A34A"
          />

          <Text className="ml-2 font-semibold text-green-700">
            May 2026
          </Text>

          <Ionicons
            name="chevron-down"
            size={18}
            color="#16A34A"
          />

        </Pressable>
      </View>

      {/* Summary */}

      <View className="p-5">

        <ReportCard
          title="Income"
          amount="₹1,20,000"
          color="#22C55E"
        />

        <ReportCard
          title="Expenses"
          amount="₹75,430"
          color="#EF4444"
        />

        <ReportCard
          title="Savings"
          amount="₹44,570"
          color="#3B82F6"
        />

      </View>

      {/* Income vs Expense */}

<Monthly/>
      {/* Monthly Spending */}

      <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow shadow-black/10">

        <Text className="mb-5 text-xl font-bold">
          Monthly Spending
        </Text>

        <BarChart
          data={[
            {
              value: 42000,
              label: "Jan",
              frontColor: "#22C55E",
            },
            {
              value: 51000,
              label: "Feb",
              frontColor: "#22C55E",
            },
            {
              value: 47000,
              label: "Mar",
              frontColor: "#22C55E",
            },
            {
              value: 62000,
              label: "Apr",
              frontColor: "#16A34A",
            },
            {
              value: 75430,
              label: "May",
              frontColor: "#15803D",
            },
          ]}
          height={220}
          barWidth={28}
          spacing={26}
          roundedTop
          roundedBottom
          noOfSections={5}
          maxValue={80000}
          rulesColor="#E5E7EB"
          rulesType="dashed"
          yAxisColor="transparent"
          xAxisColor="#E5E7EB"
          xAxisLabelTextStyle={{
            color: "#6B7280",
            fontWeight: "600",
          }}
          yAxisTextStyle={{
            color: "#9CA3AF",
          }}
          formatYLabel={(value) =>
            `₹${Number(value) / 1000}k`
          }
          isAnimated
          showValuesAsTopLabel
          topLabelTextStyle={{
            color: "#111827",
            fontSize: 11,
            fontWeight: "700",
          }}
        />
      </View>
      {/* Financial Health */}

      <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow shadow-black/10">

        <Text className="mb-4 text-xl font-bold">
          Financial Health
        </Text>

        <View className="mb-4 h-4 overflow-hidden rounded-full bg-gray-200">
          <View
            className="h-full rounded-full bg-green-500"
            style={{ width: "74%" }}
          />
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-600">
            Score
          </Text>

          <Text className="font-bold text-green-600">
            74 / 100
          </Text>
        </View>

      </View>

      {/* Top Spending Categories */}

      <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow shadow-black/10">

        <Text className="mb-5 text-xl font-bold">
          Top Spending Categories
        </Text>

        {[
          {
            name: "🍔 Food & Dining",
            amount: "₹18,420",
            percent: 82,
            color: "bg-blue-500",
          },
          {
            name: "🛍 Shopping",
            amount: "₹14,600",
            percent: 65,
            color: "bg-yellow-500",
          },
          {
            name: "🚗 Transport",
            amount: "₹10,300",
            percent: 45,
            color: "bg-green-500",
          },
          {
            name: "💡 Bills",
            amount: "₹8,100",
            percent: 35,
            color: "bg-red-500",
          },
        ].map((item, index) => (
          <View key={index} className="mb-5">

            <View className="mb-2 flex-row justify-between">

              <Text className="font-semibold text-gray-700">
                {item.name}
              </Text>

              <Text className="font-bold">
                {item.amount}
              </Text>

            </View>

            <View className="h-3 overflow-hidden rounded-full bg-gray-200">

              <View
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.percent}%` }}
              />

            </View>

          </View>
        ))}

      </View>

      {/* Budget Status */}

      <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow shadow-black/10">

        <Text className="mb-5 text-xl font-bold">
          Budget Status
        </Text>

        <View className="flex-row justify-between">

          <View className="items-center">

            <Text className="text-3xl font-bold text-green-600">
              74%
            </Text>

            <Text className="mt-2 text-gray-500">
              Used
            </Text>

          </View>

          <View className="items-center">

            <Text className="text-3xl font-bold text-blue-600">
              ₹24,570
            </Text>

            <Text className="mt-2 text-gray-500">
              Remaining
            </Text>

          </View>

        </View>

      </View>

      {/* Smart Insights */}

      <View className="mx-5 mt-5 mb-8 rounded-3xl bg-green-600 p-6">

        <Text className="text-xl font-bold text-white">
          💡 Smart Insights
        </Text>

        <Text className="mt-4 leading-6 text-green-100">
          • Expenses decreased by 12% compared to last month.
        </Text>

        <Text className="mt-2 leading-6 text-green-100">
          • You saved ₹8,450 more than last month.
        </Text>

        <Text className="mt-2 leading-6 text-green-100">
          • Food & Dining is your biggest expense.
        </Text>

        <Text className="mt-2 leading-6 text-green-100">
          • Keep spending below ₹18,000 next month to reach your savings goal.
        </Text>

      </View>

    </ScrollView>
  );
}