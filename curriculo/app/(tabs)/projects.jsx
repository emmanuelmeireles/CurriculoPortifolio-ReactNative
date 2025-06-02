import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Projects() {
  const handleOpenRepo = () => {
    Linking.openURL('https://github.com/emmanuelmeireles/secret-Number.git');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto: Jogo</Text>
      <Text style={styles.description}>
        Aqui você pode acessar o repositório do meu jogo desenvolvido em React Native. 
        Clique no botão abaixo para visualizar o código-fonte e instruções de instalação.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenRepo}>
        <Text style={styles.buttonText}>Ver repositório do jogo</Text>
      </TouchableOpacity>
      {/* 
      
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#405a23',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});