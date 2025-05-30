import { View, Text, StyleSheet } from 'react-native';

export default function AcademicsExperience() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiências Acadêmicas</Text>
      <View style={styles.item}>
        <Text style={styles.course}>2023 - 2025</Text>
        <Text style={styles.institution}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.description}>Tecnólogo em Sistemas para Internet</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.course}>2020 - 2025</Text>
        <Text style={styles.institution}>Estácio</Text>
        <Text style={styles.description}>Bacharelado em Arquitetura e Urbanismo</Text>
      </View>
      <Text style={styles.title}>Idiomas</Text>
      <View style={styles.item}>
        <Text style={styles.language}>Inglês - Básico</Text>
        <Text style={styles.language}>Espanhol - Intermediário</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    padding: 24,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 16,
  },
  item: {
    marginBottom: 18,
  },
  course: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  institution: {
    color: 'white',
    fontSize: 15,
  },
  description: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
  },
  language: {
    color: 'white',
    fontSize: 15,
  },
});