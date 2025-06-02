import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>volta Aqui ficará os botoes </Text>
      <View style={styles.spacer} />
      {/* NavBar fixa na parte inferior */}
      <View style={styles.navBar}>
        <Link href={"/about"} style={styles.navButton}>
          Sobre
        </Link>
        <Link href={"/academicExperiences"} style={styles.navButton}>
          Formação
        </Link>
        <Link href={"/professionalExperiences"} style={styles.navButton}>
          Profissional
        </Link>
        <Link href={"/project"} style={styles.navButton}>
          Projetos
        </Link>
        <Link href={"/passwordGame"} style={styles.navButton}>
          Jogo
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    marginTop: 40,
  },
  spacer: {
    flex: 1,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#405a23',
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 10,
  },
  navButton: {
    color: 'white',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginHorizontal: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 60,
    fontSize: 13,
    transition: 'background-color 0.3s, color 0.3s',
    
    ':hover': {
      backgroundColor: '#7fa650',
      color: '#fff',
      transform: [{ scale: 1.08 }],
      cursor: 'pointer',
    },
  },
});