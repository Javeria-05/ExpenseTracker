import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import BottomNav from "../components/BottomNav";
import { Colors } from "../constants/theme";


export default function HomeScreen({ navigation }) {

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Header */}
      <Text style={styles.welcome}>
        Welcome Back
      </Text>

      <Text style={styles.name}>
        My Wallet
      </Text>

      {/* Balance Card */}
      <View style={styles.balanceCard}>

        <Text style={styles.balanceLabel}>
          Total Balance
        </Text>

        <Text style={styles.balanceAmount}>
          Rs. 24,850
        </Text>

        <View style={styles.row}>

          {/* Income */}
          <View style={styles.smallCard}>
            <Text style={styles.incomeText}>
              Income
            </Text>

            <Text style={styles.smallAmount}>
              Rs. 5200
            </Text>
          </View>

          {/* Expense */}
          <View style={styles.smallCard}>
            <Text style={styles.expenseText}>
              Expense
            </Text>

            <Text style={styles.smallAmount}>
              Rs. 1840
            </Text>
          </View>

        </View>

      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("AddTransaction")
        }
      >
        <Text style={styles.buttonText}>
          Add Transaction
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Transactions")
        }
      >
        <Text style={styles.buttonText}>
          View Transactions
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Analytics")
        }
      >
        <Text style={styles.buttonText}>
          Analytics
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate("Settings")
        }
      >
        <Text style={styles.buttonText}>
          Settings
        </Text>
      </TouchableOpacity>
<BottomNav navigation={navigation} />
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

  welcome:{
    color:"#888",
    fontSize:16
  },

  name:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:20
  },

  balanceCard:{
    backgroundColor:
      Colors.light.dark,
    borderRadius:25,
    padding:25,
    marginBottom:25
  },

  balanceLabel:{
    color:"white",
    fontSize:16
  },

  balanceAmount:{
    color:"white",
    fontSize:34,
    fontWeight:"bold",
    marginVertical:20
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between"
  },

  smallCard:{
    backgroundColor:"#13283D",
    padding:20,
    borderRadius:20,
    width:"48%"
  },

  incomeText:{
    color:
      Colors.light.success
  },

  expenseText:{
    color:
      Colors.light.danger
  },

  smallAmount:{
    color:"white",
    fontWeight:"bold",
    marginTop:8
  },

  button:{
    backgroundColor:
      Colors.light.primary,
    padding:16,
    borderRadius:14,
    marginBottom:12
  },

  buttonText:{
    color:"white",
    textAlign:"center",
    fontWeight:"bold"
  }

});