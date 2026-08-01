import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts'

const summary = {
  income: 120000,
  expense: 75430,
  savings: 44570,
};

const incomeExpenseData = [
  {
    value: summary.income,
    color: "#22C55E",
    gradientCenterColor: "#16A34A",
  },
  {
    value: summary.expense,
    color: "#EF4444",
    gradientCenterColor: "#DC2626",
  },
  {
    value: summary.savings,
    color: "#3B82F6",
    gradientCenterColor: "#2563EB",
  },
];

const Monthly = () => {
  return (
    <View>
 <View className="mx-5 rounded-3xl bg-white p-5 shadow shadow-black/10">

        <Text className="mb-5 text-xl font-bold">
          Income vs Expense
        </Text>

        <View className="items-center">

          <PieChart
            donut
            radius={90}
            innerRadius={55}
            data={incomeExpenseData}
            centerLabelComponent={() => (
              <View className="items-center">
                <Text className="text-xs text-gray-500">
                  Savings
                </Text>

                <Text className="text-xl font-bold">
                  ₹44.5K
                </Text>
              </View>
            )}
          />

        </View>

        {/* Legend */}

        <View className="mt-8">

          <View className="mb-4 flex-row items-center justify-between">

            <View className="flex-row items-center">

              <View className="h-3 w-3 rounded-full bg-green-500" />

              <Text className="ml-3 text-gray-700">
                Income
              </Text>

            </View>

            <Text className="font-semibold">
              ₹1,20,000
            </Text>

          </View>

          <View className="mb-4 flex-row items-center justify-between">

            <View className="flex-row items-center">

              <View className="h-3 w-3 rounded-full bg-red-500" />

              <Text className="ml-3 text-gray-700">
                Expense
              </Text>

            </View>

            <Text className="font-semibold">
              ₹75,430
            </Text>

          </View>

          <View className="flex-row items-center justify-between">

            <View className="flex-row items-center">

              <View className="h-3 w-3 rounded-full bg-blue-500" />

              <Text className="ml-3 text-gray-700">
                Savings
              </Text>

            </View>

            <Text className="font-semibold">
              ₹44,570
            </Text>

          </View>

        </View>

      </View>

      {/* Expense By Category */}

      <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow shadow-black/10">
        <Text className="mb-5 text-xl font-bold">
          Expense by Category
        </Text>

        <View className="items-center">
          <PieChart
            data={[
              {
                value: 28,
                color: "#3B82F6",
                text: "Food",
              },
              {
                value: 22,
                color: "#F59E0B",
                text: "Shopping",
              },
              {
                value: 18,
                color: "#22C55E",
                text: "Transport",
              },
              {
                value: 14,
                color: "#EF4444",
                text: "Bills",
              },
              {
                value: 18,
                color: "#8B5CF6",
                text: "Others",
              },
            ]}
            radius={90}
            showText={false}
            strokeWidth={2}
            strokeColor="#fff"
          />
        </View>

        {/* Legend */}

        <View className="mt-8">

          <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 h-3 w-3 rounded-full bg-blue-500" />
              <Text className="text-gray-700">
                Food & Dining
              </Text>
            </View>

            <Text className="font-semibold">
              28%
            </Text>
          </View>

          <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 h-3 w-3 rounded-full bg-yellow-500" />
              <Text className="text-gray-700">
                Shopping
              </Text>
            </View>

            <Text className="font-semibold">
              22%
            </Text>
          </View>

          <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 h-3 w-3 rounded-full bg-green-500" />
              <Text className="text-gray-700">
                Transport
              </Text>
            </View>

            <Text className="font-semibold">
              18%
            </Text>
          </View>

          <View className="mb-4 flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 h-3 w-3 rounded-full bg-red-500" />
              <Text className="text-gray-700">
                Bills & Utilities
              </Text>
            </View>

            <Text className="font-semibold">
              14%
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="mr-3 h-3 w-3 rounded-full bg-purple-500" />
              <Text className="text-gray-700">
                Others
              </Text>
            </View>

            <Text className="font-semibold">
              18%
            </Text>
          </View>

        </View>
      </View>
          </View>
  )
}

export default Monthly