import { Text, View } from "react-native";

const ReportCard = ({
  title,
  amount,
  color,
}: {
  title: string;
  amount: string;
  color: string;
}) => (
  <View className="mb-3 rounded-2xl bg-white shadow shadow-black/10 p-4">
    <View className="flex-row items-center justify-between">
      <Text className="text-gray-500">{title}</Text>

      <View
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          backgroundColor: color,
        }}
      />
    </View>

    <Text className="mt-2 text-2xl font-bold text-gray-900">
      {amount}
    </Text>
  </View>
);

export default ReportCard;