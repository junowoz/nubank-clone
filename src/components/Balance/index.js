import { StyleSheet, Text, View } from "react-native";
import {MotiView} from "moti";
import React from "react";

export default function Balance({ saldo, gastos}) {
  return (
    <MotiView style={styles.container}
    from={{
      opacity: 0,
      rotateX: "-100deg",
    }}
    animate={{
      opacity: 1,
      rotateX: "0deg",
    }}
    transition={{
      type: "timing",
      duration: 1000,
      delay: 300,
    }}
    >
      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
          <Text style={styles.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    padding: 22,
    zIndex: 99,
  },

  itemTitle: {
    color: "gray",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  content: {
    flexDirection: "row", //um do lado do outro
    alignItems: "center",
  },
  currencySymbol: {
    color: "gray",
    marginRight: 6,
    fontSize: 16,
    fontWeight: "bold",
  },
  balance: {
    fontSize: 22,
    color:"#2ecc71",
    fontWeight: "bold",
  },
  expenses: {
    fontSize: 22,
    color:"#e74c3c",
    fontWeight: "bold",
    },
});
