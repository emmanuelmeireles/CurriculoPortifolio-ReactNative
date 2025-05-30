import { Link } from 'expo-router';
import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>volta Aqui ficará os botoes </Text>
      <Link href={"/about"} styles ={styles.button}>
      Sobre mim
      </Link>
      <Link href={"/academicExperiences"} styles ={styles.button}>
      Minha formação academica
      </Link>
      <Link href={"/professionalExperiences"} styles ={styles.button}>
      Minhas experiências profissionais
      </Link>
      <Link href={"/project"} styles ={styles.button}>
      Meus projetos
      </Link>
      <Link href={"/passwordGame"} styles ={styles.button}>
      Jogo da senha
      </Link>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});










