import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Sobre Este Aplicativo</Text>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionDescription}>
          Este aplicativo foi cuidadosamente desenvolvido para servir como meu **portfólio profissional**, apresentando minhas experiências acadêmicas e profissionais, projetos desenvolvidos e um mini-jogo interativo. Ele reflete meu compromisso com o uso de **tecnologias modernas** e as **melhores práticas de UI/UX** no desenvolvimento mobile.
        </Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionSubtitle}>Módulos e Tecnologias Utilizados:</Text>
        <View style={styles.techList}>
          <Text style={styles.techItem}>• **Expo Router:** Navegação intuitiva e baseada em arquivos.</Text>
          <Text style={styles.techItem}>• **React Native:** Desenvolvimento mobile multiplataforma.</Text>
          <Text style={styles.techItem}>• **React Native Paper:** Componentes de interface com Material Design.</Text>
          <Text style={styles.techItem}>• **Styled Components:** Estilização componentizada e flexível.</Text>
          <Text style={styles.techItem}>• **TypeScript:** Garante tipagem estática para código mais robusto.</Text>
          <Text style={styles.techItem}>• **JavaScript ES6+:** Padrão moderno de programação.</Text>
          <Text style={styles.techItem}>• **React Navigation:** Alternativa flexível para gerenciamento de telas.</Text>
          <Text style={styles.techItem}>• **Axios:** Cliente HTTP para requisições eficientes.</Text>
          <Text style={styles.techItem}>• **Context API:** Gerenciamento de estado otimizado.</Text>
          <Text style={styles.techItem}>• **AsyncStorage:** Armazenamento local de dados no dispositivo.</Text>
          <Text style={styles.techItem}>• **ESLint & Prettier:** Padronização e formatação de código.</Text>
          <Text style={styles.techItem}>• **Git & GitHub:** Controle de versão e colaboração.</Text>
          <Text style={styles.techItem}>• **Tailwind CSS:** (Em projetos web) Estilização utilitária rápida.</Text>
          <Text style={styles.techItem}>• **MySQL/PostgreSQL:** Bancos de dados em projetos fullstack.</Text>
          <Text style={styles.techItem}>• **Flutter e Dart:** (Em projetos anteriores) Experiência em desenvolvimento nativo.</Text>
          <Text style={styles.techItem}>• **Metodologias Ágeis:** Scrum e Kanban para gestão de projetos.</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.sectionDescription}>
          A arquitetura deste aplicativo foi pensada para ser **responsiva**, **acessível** e de **fácil manutenção**, sempre buscando as melhores práticas e inovações no vasto ecossistema do React Native.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5F9',
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A5276',
    textAlign: 'center',
    marginBottom: 25,
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.07,
    shadowRadius: 7,
    elevation: 4,
    borderLeftWidth: 4,
    borderColor: '#5DADE2',
  },
  sectionDescription: {
    fontSize: 16,
    color: '#4A5057',
    lineHeight: 24,
    textAlign: 'justify',
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  techList: {
    // Estilos para o contêiner da lista de tecnologias
  },
  techItem: {
    fontSize: 15,
    color: '#4A5057',
    lineHeight: 22,
    marginBottom: 4,
  },
});