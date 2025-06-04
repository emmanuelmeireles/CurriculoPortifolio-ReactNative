import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfessionalExperiences() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      {/* Adicione aqui cada experiência conforme seu currículo */}
      <Text style={styles.item}>
        MARÇO DE 2025 - ATUALMENTE{'\n'}
        Residência de Software — Porto Digital e CLARO{'\n'}
        Desenvolvedor de Software Fullstack{'\n'}
        • Desenvolvimento de solução mobile utilizando React Native, adaptação para Web, bancos de dados relacionais, etc.
      </Text>
      {/* ...outras experiências... */}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#63783d', padding: 20 },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  item: { color: 'white', fontSize: 16, marginBottom: 16 },
});