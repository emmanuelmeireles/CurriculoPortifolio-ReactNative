import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity, ScrollView } from 'react-native';

export default function Projetos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Meus Projetos</Text>

      {/* Cartão: App de Currículo em React Native */}
      <View style={styles.card}>
        <Text style={styles.projectTitle}>App de Currículo em React Native</Text>
        <Text style={styles.projectDescription}>
          Aplicativo mobile desenvolvido para apresentar meu perfil profissional, experiências, projetos e um mini-jogo interativo.
          Utiliza Expo Router para navegação e React Native para a interface, mostrando a capacidade de criar aplicações completas e dinâmicas.
        </Text>
      </View>

      {/* Cartão: Sistema de Controle de Tarefas */}
      <View style={styles.card}>
        <Text style={styles.projectTitle}>Sistema de Controle de Tarefas</Text>
        <Text style={styles.projectDescription}>
          Plataforma web desenvolvida em Node.js para gerenciamento de tarefas, com autenticação robusta, organização por categorias e interface responsiva.
          Demonstra habilidades em desenvolvimento backend e frontend com foco em usabilidade.
        </Text>
      </View>

      {/* Cartão: Outros Projetos */}
      <View style={styles.card}>
        <Text style={styles.projectTitle}>Outros Projetos e Contribuições</Text>
        <Text style={styles.projectDescription}>
          Diversos projetos pessoais e acadêmicos, abrangendo tecnologias como React, Next.js, Java, Flutter, Angular e bancos de dados.
          Sempre buscando novos desafios para aprimorar minhas habilidades e explorar diferentes stacks de desenvolvimento.
        </Text>
      </View>

      {/* Botão de GitHub em destaque */}
      <TouchableOpacity
        style={styles.githubButton}
        onPress={() => Linking.openURL('https://github.com/emmanuelmeireles')}
      >
        <Text style={styles.githubButtonText}>🚀 Veja mais projetos no meu GitHub 🚀</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC', // Um fundo branco-azulado bem suave
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#007BFF', // Azul vibrante para o título principal
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.07)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: '#FFFFFF', // Fundo branco puro para os cartões
    borderRadius: 15, // Bordas arredondadas
    padding: 20,
    marginBottom: 20, // Espaçamento entre os cartões
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
    borderLeftWidth: 5, // Uma borda colorida na esquerda para destacar
    borderColor: '#3498DB', // Azul claro para a borda
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495E', // Um azul escuro para os títulos dos projetos
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    color: '#555', // Cinza médio para as descrições
    lineHeight: 24, // Espaçamento entre linhas para melhor leitura
  },
  githubButton: {
    backgroundColor: '#24292e', // Cor oficial do GitHub
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  githubButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});