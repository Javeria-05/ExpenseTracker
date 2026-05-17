import React, {
  useEffect,
  useState
} from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Colors
} from "../constants/theme";

export default function TransactionsScreen() {

  const [transactions,
    setTransactions] =
      useState([]);

  useEffect(() => {

    loadTransactions();

  }, []);

  const loadTransactions =
    async () => {

    const data =
      JSON.parse(
        await AsyncStorage.getItem(
          "transactions"
        )
      ) || [];

    setTransactions(data);
  };

  const deleteTransaction =
    async (id) => {

    const updatedData =
      transactions.filter(
        item =>
          item.id !== id
      );

    setTransactions(
      updatedData
    );

    await AsyncStorage.setItem(
      "transactions",
      JSON.stringify(
        updatedData
      )
    );
  };

  const renderItem =
    ({ item }) => (

    <View style={styles.card}>

      {/* Title + Category */}
      <View>

        <Text style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.category}>
          {item.category ||
            "General"}
        </Text>

      </View>

      {/* Amount */}
      <Text
        style={[
          styles.amount,

          {
            color:
              item.type ===
              "income"

                ? Colors.light
                    .success

                : Colors.light
                    .danger
          }
        ]}
      >
        Rs. {item.amount}
      </Text>

      {/* Delete */}
      <TouchableOpacity
        onPress={() =>
          deleteTransaction(
            item.id
          )
        }
      >
        <Text
          style={
            styles.delete
          }
        >
          Delete
        </Text>
      </TouchableOpacity>

    </View>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>
        Transactions
      </Text>

      <FlatList
        data={transactions}
        keyExtractor={
          item =>
            item.id.toString()
        }
        renderItem={
          renderItem
        }
      />

    </View>
  );
}

const styles =
  StyleSheet.create({

  container:{
    flex:1,
    padding:20,
    backgroundColor:
      Colors.light
        .background
  },

  heading:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },

  card:{
    backgroundColor:
      "white",

    borderRadius:18,

    padding:18,

    marginBottom:15
  },

  title:{
    fontSize:18,
    fontWeight:"bold"
  },

  category:{
    color:"#666",
    marginTop:5
  },

  amount:{
    fontSize:20,
    fontWeight:"bold",
    marginTop:10
  },

  delete:{
    color:"red",
    marginTop:12,
    fontWeight:"bold"
  }

});