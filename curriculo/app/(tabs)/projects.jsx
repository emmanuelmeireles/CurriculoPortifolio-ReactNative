import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Project() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto: Jogo</Text>
      <Text style={styles.text}>
        Veja o repositório do meu jogo no GitHub:
      </Text>
      <TouchableOpacity onPress={() => Linking.openURL('https://github.com/emmanuelmeireles/seu-repositorio-do-jogo')}>
        <Text style={styles.link}>Acessar repositório</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63783d', padding: 20 },
  title: { color: 'white', fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  text: { color: 'white', fontSize: 16, marginBottom: 12 },
  link: { color: '#aadfff', fontSize: 16, textDecorationLine: 'underline' },
});