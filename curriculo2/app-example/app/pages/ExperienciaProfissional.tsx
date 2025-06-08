import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExperienciaProfissional() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>Experiência Profissional</Text>

      {/* Cartão de Desenvolvedor de Software Fullstack - CLARO */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.cardCompany}>Residência de Software — Porto Digital e CLARO</Text>
        <Text style={styles.cardPeriod}>Março de 2025 - Atualmente</Text>
        <Text style={styles.cardDescription}>
          Atuo no desenvolvimento de soluções mobile utilizando React Native, com adaptação para aplicações web.
          Trabalho com bancos de dados relacionais, SQL e integração de tecnologias como Java, React, Tailwind CSS e PostgreSQL.
          Participo de projetos colaborativos, aplicando metodologias ágeis e boas práticas de versionamento com Git.
        </Text>
      </View>

      {/* Cartão de Desenvolvedor de Software Fullstack - Accenture */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.cardCompany}>Residência de Software — Porto Digital e Accenture</Text>
        <Text style={styles.cardPeriod}>Janeiro de 2024 - Junho de 2024</Text>
        <Text style={styles.cardDescription}>
          Desenvolvi soluções mobile com Flutter, adaptando para web e utilizando bancos de dados MySQL.
          Atuei em projetos que exigiram integração entre diferentes stacks, como Java, React e Tailwind CSS,
          sempre focando em entregar produtos robustos e eficientes.
        </Text>
      </View>

      {/* Cartão de Estagiário de Projetos - ADEPE */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Estagiário de Projetos</Text>
        <Text style={styles.cardCompany}>ADEPE – Agência de Desenvolvimento Econômico de Pernambuco</Text>
        <Text style={styles.cardPeriod}>Janeiro de 2024 - Junho de 2024</Text>
        <Text style={styles.cardDescription}>
          Auxiliei na avaliação de projetos e levantamentos utilizando AutoCAD/Archicad,
          desenvolvendo habilidades em análise e estruturação de dados para apoiar decisões estratégicas.
        </Text>
      </View>

      {/* Cartão de Estagiário de Projetos - Tony Pedrosa Designer de Interiores */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Estagiário de Projetos</Text>
        <Text style={styles.cardCompany}>Tony Pedrosa Designer de Interiores</Text>
        <Text style={styles.cardPeriod}>Fevereiro de 2022 - Abril de 2023</Text>
        <Text style={styles.cardDescription}>
          Realizei levantamentos residenciais e comerciais com AutoCAD e SketchUp,
          colaborando em projetos que exigiam análise técnica, criatividade e foco em resultados precisos.
        </Text>
      </View>

      {/* Cartão de Auxiliar de Suporte Técnico */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Auxiliar de Suporte Técnico</Text>
        <Text style={styles.cardCompany}>Empresa</Text>
        <Text style={styles.cardPeriod}>Fevereiro de 2018 - Fevereiro de 2022</Text>
        <Text style={styles.cardDescription}>
          Auxiliei gerentes em scripts de servidores em Python, atualizações e testes de firmwares de roteadores,
          além de prestar suporte remoto para resolução de problemas técnicos.
        </Text>
      </View>

      {/* Cartão de Serviço Voluntário */}
      <View style={styles.card}>
        <Text style={styles.cardRole}>Serviço Voluntário</Text>
        <Text style={styles.cardCompany}>ABIJCSUD</Text>
        <Text style={styles.cardPeriod}>Fevereiro de 2015 - Abril de 2017</Text>
        <Text style={styles.cardDescription}>
          Treinei e orientei equipes em reuniões com até 24 representantes voluntários,
          atuando como Voluntário Júnior, Sênior, Treinador, Líder Distrital, Regional e Assistente de Presidente.
          Desenvolvi habilidades de liderança, organização e trabalho em equipe em ambiente não governamental.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4F6', // Um tom de azul claro ainda mais suave
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0056B3', // Um azul um pouco mais escuro e sóbrio para o título
    textAlign: 'center',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.08)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12, // Um pouco menos arredondado, mais formal
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  cardRole: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 4,
  },
  cardCompany: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 2,
  },
  cardPeriod: {
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  cardDescription: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
    marginTop: 5,
  },
});