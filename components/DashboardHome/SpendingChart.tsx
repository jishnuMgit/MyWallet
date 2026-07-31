import React from "react";
import { View, Text } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const data = [
  {
    value: 12500,
    label: "May",
    frontColor: "#22C55E",
  },
  {
    value: 18200,
    label: "Jun",
    frontColor: "#22C55E",
  },
  {
    value: 14600,
    label: "Jul",
    frontColor: "#22C55E",
  },
  {
    value: 21900,
    label: "Aug",
    frontColor: "#16A34A",
  },
];

const SpendingChart = () => {
  return (
    <View className="mx-5 mt-5 rounded-3xl bg-white p-5 shadow-lg shadow-black/20">
      {/* Header */}
      <View className="mb-6 flex-row items-center justify-between">
        <Text className="text-lg font-bold text-gray-900">
          Last 4 Months
        </Text>

        <View className="rounded-full bg-green-100 px-4 py-2">
          <Text className="text-xs font-semibold text-green-700">
            Spending
          </Text>
        </View>
      </View>

      <BarChart
        data={data}
        width={300}
        height={230}
        barWidth={22}
        spacing={32}
        roundedTop
        roundedBottom
        isAnimated
        animationDuration={900}

        /* X Axis */
        xAxisThickness={1}
        xAxisColor="#E5E7EB"
        xAxisLabelTextStyle={{
          color: "#6B7280",
          fontSize: 12,
          fontWeight: "600",
        }}

        /* Y Axis */
        maxValue={25000}
        noOfSections={5}
        yAxisThickness={0}
        yAxisTextStyle={{
          color: "#6B7280",
          fontSize: 12,
        }}
        formatYLabel={(value) => `₹${Number(value) / 1000}k`}

        /* Grid */
        hideRules={false}
        rulesType="dashed"
        rulesColor="#E5E7EB"
        dashWidth={4}
        dashGap={4}

        /* Interaction */
        focusBarOnPress
        renderTooltip={(item:any) => (
          <View
            style={{
              backgroundColor: "#16A34A",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 10,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "700",
                fontSize: 13,
              }}
            >
              ₹{item.value.toLocaleString()}
            </Text>
          </View>
        )}
      />

      {/* Footer */}
      <View className="mt-6 flex-row justify-between rounded-2xl bg-green-50 p-4">
        <View>
          <Text className="text-xs text-gray-500">Highest</Text>
          <Text className="mt-1 text-lg font-bold text-green-600">
            ₹21,900
          </Text>
          <Text className="text-xs text-gray-400">August</Text>
        </View>

        <View className="items-end">
          <Text className="text-xs text-gray-500">Average</Text>
          <Text className="mt-1 text-lg font-bold text-gray-900">
            ₹16,800
          </Text>
          <Text className="text-xs text-gray-400">
            Last 4 Months
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SpendingChart;