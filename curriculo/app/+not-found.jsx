import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Página não encontrada",
          headerStyle: { backgroundColor: "#405a23" },
          headerTintColor: "white",
        }}
      />
      <View style={styles.container}>
        <Link href="/" style={styles.link}>
          Voltar para a página inicial
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63783d",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    color: "white",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});