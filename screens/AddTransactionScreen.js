import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Colors } from "../constants/theme";

export default function AddTransactionScreen() {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] =
    useState("Food");

  const saveTransaction = async () => {

    if (!title || !amount) {
      Alert.alert(
        "Missing Fields",
        "Please complete all fields."
      );
      return;
    }

    const newTransaction = {
      id: Date.now(),
      title,
      amount,
      type,
      category
    };

    const oldData =
      JSON.parse(
        await AsyncStorage.getItem(
          "transactions"
        )
      ) || [];

    oldData.push(newTransaction);

    await AsyncStorage.setItem(
      "transactions",
      JSON.stringify(oldData)
    );

    Alert.alert(
      "Success",
      "Transaction Added"
    );

    setTitle("");
    setAmount("");
  };

  return (
    <ScrollView
      style={styles.container}
    >

      <Text style={styles.heading}>
        Add Transaction
      </Text>

      {/* Type */}
      <View style={styles.toggleContainer}>

        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() =>
            setType("expense")
          }
        >
          <Text>
            Expense
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() =>
            setType("income")
          }
        >
          <Text>
            Income
          </Text>
        </TouchableOpacity>

      </View>

      {/* Category */}
      <Text style={styles.label}>
        Select Category
      </Text>

      <View style={styles.toggleContainer}>

        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() =>
            setCategory("Food")
          }
        >
          <Text>Food</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={() =>
            setCategory(
              "Transport"
            )
          }
        >
          <Text>
            Transport
          </Text>
        </TouchableOpacity>

      </View>

      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.saveBtn}
        onPress={saveTransaction}
      >
        <Text style={styles.saveText}>
          Save Transaction
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:
      Colors.light.background,
    padding:20
  },

  heading:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },

  label:{
    fontWeight:"bold",
    marginBottom:10
  },

  toggleContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:15
  },

  toggleBtn:{
    width:"48%",
    backgroundColor:"white",
    padding:15,
    borderRadius:12,
    alignItems:"center"
  },

  input:{
    backgroundColor:"white",
    borderRadius:12,
    padding:15,
    marginBottom:15
  },

  saveBtn:{
    backgroundColor:
      Colors.light.primary,
    padding:18,
    borderRadius:14
  },

  saveText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  }

});