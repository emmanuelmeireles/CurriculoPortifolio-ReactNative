import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Portfólio</Text>
      <Link href="/about" style={styles.link}>Sobre</Link>
      <Link href="/academicExperiences" style={styles.link}>Experiência Acadêmica</Link>
      <Link href="/professionalExperiences" style={styles.link}>Experiência Profissional</Link>
      <Link href="/project" style={styles.link}>Projetos</Link>
      <Link href="/passwordGame" style={styles.link}>Jogo Senha</Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63783d' },
  title: { color: 'white', fontSize: 24, marginBottom: 24 },
  link: { color: 'white', fontSize: 18, marginVertical: 8, textDecorationLine: 'underline' },
});