import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

type GoldTransaction = {
  id: number;
  type: "ADD" | "REMOVE";
  grams: number;
  pricePerGram: number;
  date: string;
  note: string;
};

export default function Gold() {
  const [transactions, setTransactions] = useState<GoldTransaction[]>([
    {
      id: 1,
      type: "ADD",
      grams: 10,
      pricePerGram: 7200,
      date: "28 Jul 2026",
      note: "Wedding Gold",
    },
    {
      id: 2,
      type: "ADD",
      grams: 5,
      pricePerGram: 7350,
      date: "31 Jul 2026",
      note: "Monthly Investment",
    },
    {
      id: 3,
      type: "REMOVE",
      grams: 2,
      pricePerGram: 7600,
      date: "05 Aug 2026",
      note: "Sold Gold",
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState<"ADD" | "REMOVE">("ADD");

  const [grams, setGrams] = useState("");
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const totalGrams = useMemo(() => {
    return transactions.reduce((sum, item) => {
      return item.type === "ADD"
        ? sum + item.grams
        : sum - item.grams;
    }, 0);
  }, [transactions]);

  const currentRate = 7600;

  const totalValue = totalGrams * currentRate;


  const saveGoldTransaction = () => {
  if (!grams || !price) return;

  const newTransaction: GoldTransaction = {
    id: Date.now(),
    type: mode,
    grams: Number(grams),
    pricePerGram: Number(price),
    date: new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    note: note || (mode === "ADD" ? "Gold Purchased" : "Gold Sold"),
  };

  setTransactions((prev) => [newTransaction, ...prev]);

  setGrams("");
  setPrice("");
  setNote("");

  setModalVisible(false);
};
  return (
    <View className="flex-1 bg-gray-100">

      {/* HEADER */}

      <View className="rounded-b-[35px] bg-yellow-500 px-5 pb-8 pt-14">

        <View className="flex-row items-center justify-between">

         <Link href="/assets">
         
            <Ionicons
              name="arrow-back"
              size={25}
              color="white"
            />

         </Link>

          <Text className="text-xl font-bold text-white">
            Gold Portfolio
          </Text>

          <Ionicons
            name="notifications-outline"
            size={24}
            color="white"
          />
        </View>

        <View className="mt-8 items-center">

          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2933/2933116.png",
            }}
            className="h-24 w-24"
          />

          <Text className="mt-3 text-4xl font-bold text-white">
            {totalGrams.toFixed(2)} g
          </Text>

          <Text className="mt-1 text-yellow-100">
            Total Gold
          </Text>
{/* 
          <Text className="mt-4 text-3xl font-bold text-white">
            ₹ {totalValue.toLocaleString()}
          </Text> */}

          <View className="mt-3 flex-row">

  {/* <View className="mr-3 rounded-full bg-yellow-400 px-4 py-2">
    <Text className="font-bold text-yellow-900">
      {transactions.filter((t) => t.type === "ADD").length} Buy
    </Text>
  </View> */}
{/* 
  <View className="rounded-full bg-red-400 px-4 py-2">
    <Text className="font-bold text-red-900">
      {transactions.filter((t) => t.type === "REMOVE").length} Sell
    </Text>
  </View> */}

</View>

{/* <Text className="mt-4 text-yellow-100">
  Current Rate ₹{currentRate.toLocaleString()}/gram
</Text> */}
        </View>
      </View>

      {/* ACTION BUTTONS */}

      <View className="-mt-8 flex-row justify-center gap-4">

        <Pressable
          onPress={() => {
            setMode("ADD");
            setModalVisible(true);
          }}
          className="rounded-2xl bg-green-600 px-8 py-4 shadow-lg"
        >
          <View className="flex-row items-center">
            <Ionicons
              name="add-circle"
              size={22}
              color="white"
            />
            <Text className="ml-2 font-bold text-white">
              Add Gold
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setMode("REMOVE");
            setModalVisible(true);
          }}
          className="rounded-2xl bg-red-500 px-8 py-4 shadow-lg"
        >
          <View className="flex-row items-center">
            <Ionicons
              name="remove-circle"
              size={22}
              color="white"
            />
            <Text className="ml-2 font-bold text-white">
              Remove
            </Text>
          </View>
        </Pressable>

      </View>

      {/* TRANSACTION TITLE */}

      <View className="mt-8 flex-row items-center justify-between px-5">

        <Text className="text-xl font-bold text-gray-900">
          Gold Transactions
        </Text>

        <MaterialCommunityIcons
          name="gold"
          size={24}
          color="#CA8A04"
        />
      </View>

      {/* TRANSACTION LIST */}

      <ScrollView
        className="mt-4 px-5"
        showsVerticalScrollIndicator={false}
      >
        {transactions.map((item) => (
          <View
            key={item.id}
            className="mb-4 rounded-3xl bg-white p-4 shadow shadow-black/10"
          >
            <View className="flex-row items-center justify-between">

              <View className="flex-row items-center">

                <View
                  className={`h-14 w-14 items-center justify-center rounded-full ${
                    item.type === "ADD"
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <MaterialCommunityIcons
                    name="gold"
                    size={28}
                    color={
                      item.type === "ADD"
                        ? "#16A34A"
                        : "#EF4444"
                    }
                  />
                </View>

                <View className="ml-4">

                  <Text className="text-lg font-bold text-gray-900">
                    {item.type === "ADD"
                      ? "Gold Purchased"
                      : "Gold Sold"}
                  </Text>

                  <Text className="text-gray-500">
                    {item.note}
                  </Text>

                  <Text className="mt-1 text-xs text-gray-400">
                    {item.date}
                  </Text>

                </View>

              </View>

              <View className="items-end">

                <Text
                  className={`text-lg font-bold ${
                    item.type === "ADD"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.type === "ADD" ? "+" : "-"}
                  {item.grams} g
                </Text>

                <Text className="text-gray-500">
                  ₹ {item.pricePerGram}/g
                </Text>

              </View>

            </View>
          </View>
        ))}

        <View className="h-40" />
      </ScrollView>
            {/* ADD / REMOVE GOLD MODAL */}
<Modal
  visible={modalVisible}
  transparent
  animationType="slide"
>
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <View className="flex-1 justify-end bg-black/50">

      <View className="rounded-t-[35px] bg-white p-6">
        {/* Your form */}
      </View>

    </View>
  </KeyboardAvoidingView>
</Modal>

<View className="mx-5 mt-6 rounded-3xl bg-white p-5 shadow shadow-black/10">

  <Text className="text-lg font-bold text-gray-900">
    Portfolio Summary
  </Text>

  <View className="mt-5 flex-row justify-between">

    <View className="items-center">
      <Text className="text-gray-500">
        Gold
      </Text>

      <Text className="mt-2 text-xl font-bold">
        {totalGrams.toFixed(2)} g
      </Text>
    </View>

    <View className="items-center">
      <Text className="text-gray-500">
        Rate
      </Text>

      <Text className="mt-2 text-xl font-bold">
        ₹{currentRate}
      </Text>
    </View>

    <View className="items-center">
      <Text className="text-gray-500">
        Value
      </Text>

      <Text className="mt-2 text-xl font-bold text-green-600">
        ₹{totalValue.toLocaleString()}
      </Text>
    </View>

  </View>

</View>

</View>
  );
}