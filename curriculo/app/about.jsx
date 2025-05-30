import { View, Text, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o Projeto</Text>
      <Text style={styles.text}>
        Este aplicativo foi desenvolvido utilizando as seguintes tecnologias e módulos:
      </Text>
      <Text style={styles.list}>
        • React Native{'\n'}
        • Expo{'\n'}
        • JavaScript/TypeScript{'\n'}
        • react-navigation{'\n'}
        • react-native-paper{'\n'}
        • Outros módulos auxiliares
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    color: 'white',
    fontSize: 16,
    textAlign: 'left',
  },
});