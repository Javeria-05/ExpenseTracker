import React, {
    useEffect,
    useState
} from "react";

import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    PieChart
} from "react-native-chart-kit";

import {
    Colors
} from "../constants/theme";

const screenWidth =
  Dimensions.get(
    "window"
  ).width;

export default function AnalyticsScreen() {

  const [chartData,
    setChartData] =
      useState([]);

  useEffect(() => {

    loadAnalytics();

  }, []);

  const loadAnalytics =
    async () => {

    const data =
      JSON.parse(
        await AsyncStorage.getItem(
          "transactions"
        )
      ) || [];

    let food = 0;
    let transport = 0;

    data.forEach(item => {

      if (
        item.category ===
        "Food"
      ) {
        food += Number(
          item.amount
        );
      }

      else if (
        item.category ===
        "Transport"
      ) {
        transport +=
          Number(
            item.amount
          );
      }

    });

    setChartData([
      {
        name: "Food",
        amount: food,
        color:
          "#27AE60",
        legendFontColor:
          "#333",
        legendFontSize: 14
      },

      {
        name:
          "Transport",

        amount:
          transport,

        color:
          "#EB5757",

        legendFontColor:
          "#333",

        legendFontSize: 14
      }

    ]);
  };

  return (
    <ScrollView
      style={styles.container}
    >

      <Text style={styles.heading}>
        Analytics
      </Text>

      <PieChart
        data={chartData}
        width={screenWidth - 40}
        height={220}

        accessor="amount"

        backgroundColor="transparent"

        paddingLeft="10"

        chartConfig={{
          color:
            () =>
              "#000"
        }}

        absolute
      />

    </ScrollView>
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

    fontWeight:
      "bold",

    marginBottom:20
  }

});