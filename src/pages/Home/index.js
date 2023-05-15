import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Aluguel",
    value: "1.200,00",
    date: "10/09/2021",
    type: 0, //despesas
  },
  {
    id: 2,
    label: "Salário",
    value: "4.500,00",
    date: "22/09/2021",
    type: 1, //receitas
  },
  {
    id: 3,
    label: "Pix - João",
    value: "7.200,00",
    date: "02/09/2021",
    type: 1, //receitas
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Anne Araújo" />
      <Balance saldo="9.250,90" gastos="-400,00" />

      <Actions />

      <Text style={styles.title}>Utimas movimentacoes</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false} //nao tem barra de rolagem
        renderItem={({ item }) => <Movements data={item} />} //Isto renderiza cada item da lista
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
