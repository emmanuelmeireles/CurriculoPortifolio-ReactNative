import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Link } from 'expo-router'; // Importa Link para navegação declarativa

export default function HomePage() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Seção da Foto de Perfil e Nome */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/emmanuel_meirelles.jpg')} // <-- **MUDE O CAMINHO DA SUA IMAGEM AQUI**
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Emmanuel Meirelles</Text>
        <Text style={styles.profileTitle}>Desenvolvedor Fullstack</Text>
      </View>
      {/* Fim da Seção da Foto de Perfil e Nome */}

      <Text style={styles.headerTitle}>Bem-vindo ao Meu Portfólio Interativo</Text>
      <Text style={styles.subtitle}>Explore minhas experiências e projetos!</Text>

      {/* Cartões de Navegação */}
      <Link href="/pages/ExperienciaAcademica" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>🎓 Experiência Acadêmica</Text>
          <Text style={styles.navCardDescription}>Minha trajetória educacional e formação profissional.</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pages/ExperienciaProfissional" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>💼 Experiência Profissional</Text>
          <Text style={styles.navCardDescription}>Conheça minhas atuações e responsabilidades no mercado de trabalho.</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pages/Projetos" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>💻 Projetos</Text>
          <Text style={styles.navCardDescription}>Descubra os trabalhos que desenvolvi e tecnologias aplicadas.</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pages/JogoSenha" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>🎮 Jogo da Senha</Text>
          <Text style={styles.navCardDescription}>Um mini-game interativo para se divertir e testar sua lógica!</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/pages/Sobre" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>ℹ️ Sobre o App</Text>
          <Text style={styles.navCardDescription}>Detalhes sobre o desenvolvimento e as tecnologias usadas neste portfólio.</Text>
        </TouchableOpacity>
      </Link>

      {/* Exemplo de link para rota dinâmica - remova se não usar */}
      <Link href="/user/123" asChild>
        <TouchableOpacity style={styles.navCard}>
          <Text style={styles.navCardTitle}>👤 Exemplo: Usuário 123</Text>
          <Text style={styles.navCardDescription}>Clique para ver um exemplo de rota dinâmica.</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.footerText}>Desenvolvido com ❤️ e React Native</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Um verde menta suave para o fundo da homepage
  },
  contentContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#4CAF50',
    borderWidth: 3,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  profileName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 5,
  },
  profileTitle: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.08)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 18,
    color: '#4CAF50',
    marginBottom: 30,
    textAlign: 'center',
  },
  navCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 6,
    borderColor: '#81C784',
  },
  navCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 5,
    textAlign: 'center',
  },
  navCardDescription: {
    fontSize: 14,
    color: '#66BB6A',
    textAlign: 'center',
  },
  footerText: {
    marginTop: 40,
    fontSize: 14,
    color: '#757575',
  },
});