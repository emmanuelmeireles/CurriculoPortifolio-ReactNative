import { View, Text, StyleSheet } from 'react-native';

export default function AcademicExperiences() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text style={styles.text}>
        2023 - 2025: Universidade Católica de Pernambuco - Tecnólogo em Sistemas para Internet{'\n'}
        2020: Estácio - Bacharelado em Arquitetura e Urbanismo (Incompleto)
      </Text>
      <Text style={styles.title}>Idiomas</Text>
      <Text style={styles.text}>
        Inglês - Básico{'\n'}
        Espanhol - Intermediário
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63783d', padding: 20 },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 16 },
  text: { color: 'white', fontSize: 16, textAlign: 'center', marginTop: 8 },
});