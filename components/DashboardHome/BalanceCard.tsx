import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const BalanceCard = () => {
  return (
<View
  style={{
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginTop: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  }}
>
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Text
      style={{
        color: "#6B7280",
        fontSize: 15,
        fontWeight: "600",
      }}
    >
      Total Balance
    </Text>

 <Pressable>
     <FontAwesome
      name="line-chart"
      size={18}
      color="#22C55E"
    />
 </Pressable>
  </View>

  <Text
    style={{
      fontSize: 34,
      fontWeight: "bold",
      color: "#111827",
      marginTop: 10,
    }}
  >
    ₹ 2,45,680.50
  </Text>

  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <Text
      style={{
        color: "#16A34A",
        fontWeight: "700",
        fontSize: 15,
      }}
    >
      +12.5%
    </Text>

    <Text
      style={{
        color: "#6B7280",
        marginLeft: 6,
        fontSize: 14,
      }}
    >
      vs last month
    </Text>
  </View>
</View>   
  )
}

export default BalanceCard