import { StyleSheet, Text, View, ScrollView, StatusBar, SafeAreaView, Platform } from "react-native";

const StatuBarHeight = StatusBar.currentHeight;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerText}>Experiencia Academica</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Experiencia Profissional</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Projetos</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Jogos</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatuBarHeight : 0,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24, 
    },