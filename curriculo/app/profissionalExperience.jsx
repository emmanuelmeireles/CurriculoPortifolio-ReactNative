import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProfissionalExperience() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Experiências Profissionais</Text>

      <View style={styles.item}>
        <Text style={styles.period}>MARÇO DE 2025 - ATUALMENTE</Text>
        <Text style={styles.role}>Residência de Software — Porto Digital e CLARO</Text>
        <Text style={styles.position}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.description}>
          • Desenvolvimento de solução mobile utilizando React Native, com adaptação para aplicação Web.{"\n"}
          • Utilização de bancos de dados relacionais para gestão de dados e SQL.{"\n"}
          • Ferramentas: React Native, Java (testes), React, Tailwind CSS, Git, PostgreSQL.
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.period}>JANEIRO DE 2024 - JUNHO DE 2024</Text>
        <Text style={styles.role}>Residência de Software — Porto Digital e Accenture</Text>
        <Text style={styles.position}>Desenvolvedor de Software Fullstack</Text>
        <Text style={styles.description}>
          • Desenvolvimento de solução mobile utilizando Flutter, com adaptação para aplicação Web.{"\n"}
          • Utilização de bancos de dados relacionais para gestão de dados e SQL.{"\n"}
          • Ferramentas: Flutter, MySQL, Java, React, Tailwind CSS.
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.period}>JANEIRO DE 2024 - JUNHO DE 2024</Text>
        <Text style={styles.role}>ADEPE – Agência de Desenvolvimento Econômico de Pernambuco</Text>
        <Text style={styles.position}>Estagiário de Projetos</Text>
        <Text style={styles.description}>
          • Auxílio nas avaliações de projetos e levantamentos com uso de AutoCAD/Archicad.{"\n"}
          • Experiência com análise e estruturação de dados.
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.period}>FEVEREIRO DE 2022 - ABRIL DE 2023</Text>
        <Text style={styles.role}>Tony Pedrosa Designer de Interiores</Text>
        <Text style={styles.position}>Estagiário de Projetos</Text>
        <Text style={styles.description}>
          • Preparação de levantamentos residenciais e comerciais com AutoCAD e SketchUp.{"\n"}
          • Colaboração em projetos com foco em análise técnica e criatividade.
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.period}>FEVEREIRO DE 2018 - FEVEREIRO DE 2022</Text>
        <Text style={styles.role}>Empresa</Text>
        <Text style={styles.position}>Auxiliar de Suporte Técnico</Text>
        <Text style={styles.description}>
          • Auxílio em scripts de servidores em Python.{"\n"}
          • Atualizações e testes de firmwares de roteadores e outros equipamentos.{"\n"}
          • Help Desk remoto para resolução de problemas técnicos.
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.period}>FEVEREIRO DE 2015 - ABRIL DE 2017</Text>
        <Text style={styles.role}>ABIJCSUD - Serviço voluntário</Text>
        <Text style={styles.position}>Diversas funções de liderança e treinamento</Text>
        <Text style={styles.description}>
          • Organização de reuniões e desenvolvimento de pessoas em ONG.{"\n"}
          • Atuação como Voluntário Júnior, Sênior, Treinador, Líder Distrital, Regional e Assistente de Presidente.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  item: {
    marginBottom: 22,
    borderBottomWidth: 1,
    borderBottomColor: '#ffffff33',
    paddingBottom: 12,
  },
  period: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  role: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
  },
  position: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 4,
  },
  description: {
    color: 'white',
    fontSize: 14,
    marginTop: 2,
  },
});