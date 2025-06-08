import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaAcademica() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Experiência Acadêmica</Text>

      {/* Cartão de Tecnólogo em Sistemas para Internet */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Tecnólogo em Sistemas para Internet</Text>
        <Text style={styles.cardSubtitle}>Universidade Católica de Pernambuco</Text>
        <Text style={styles.cardPeriod}>2023 - 2025</Text>
        <Text style={styles.cardDescription}>
          Formação focada em desenvolvimento web e mobile, com ênfase em tecnologias modernas e metodologias ágeis.
          Durante o curso, aprofundei meus conhecimentos em React Native, JavaScript, TypeScript e bancos de dados,
          além de participar de projetos práticos que simularam desafios reais do mercado.
        </Text>
      </View>

      {/* Cartão de Bacharelado em Arquitetura e Urbanismo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Bacharelado em Arquitetura e Urbanismo (Incompleto)</Text>
        <Text style={styles.cardSubtitle}>Estácio</Text>
        <Text style={styles.cardPeriod}>2020</Text>
        <Text style={styles.cardDescription}>
          Iniciei minha trajetória acadêmica na Arquitetura, onde desenvolvi um olhar apurado para design,
          criatividade e análise de projetos. Essa experiência contribuiu para minha sensibilidade estética e
          atenção aos detalhes, características que levo para o desenvolvimento de interfaces digitais.
        </Text>
      </View>

      {/* Cartão de Cursos Complementares & Autodidatismo */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Cursos Complementares & Autodidatismo</Text>
        <Text style={styles.cardDescription}>
          • React Native, React, Next.js, Java, Angular, Flutter e Dart{'\n'}
          • HTML5, CSS3 (Sass, Styled Components, Responsive Web Design){'\n'}
          • Metodologias Ágeis: Scrum e Kanban{'\n'}
          • Controle de versão com Git e Github{'\n'}
          Sempre buscando atualização constante, participei de cursos online e bootcamps,
          além de desenvolver projetos próprios para consolidar o aprendizado.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2F7', // Um azul claro suave para o fundo
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF', // Um azul vibrante para o título principal
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: '#FFFFFF', // Fundo branco para os cartões
    borderRadius: 15, // Bordas mais arredondadas
    padding: 20,
    marginBottom: 20, // Espaço entre os cartões
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 3,
  },
  cardPeriod: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  cardDescription: {
    fontSize: 15,
    color: '#444444',
    lineHeight: 22,
    marginTop: 5,
  },
});