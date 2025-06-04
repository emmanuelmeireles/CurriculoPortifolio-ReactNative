import { View, Text, StyleSheet, Animated } from 'react-native';
import React, { useRef, useEffect } from 'react';

export default function About() {
  
  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Animated.Text
        style={[
          styles.title,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        CURRÍCULO / PORTFÓLIO
      </Animated.Text>
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>
        Este aplicativo foi desenvolvido utilizando as seguintes tecnologias e módulos:
      </Animated.Text>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.list}>• React Native</Text>
        <Text style={styles.list}>• Expo</Text>
        <Text style={styles.list}>• JavaScript/TypeScript</Text>
        <Text style={styles.list}>• react-navigation</Text>
        <Text style={styles.list}>• react-native-paper</Text>
        <Text style={styles.list}>• Outros módulos auxiliares</Text>
      </Animated.View>
      <Animated.Text style={[styles.footer, { opacity: fadeAnim }]}>
        © {new Date().getFullYear()} Emmanuel Meireles
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 14,
    letterSpacing: 2,
    textShadowColor: '#405a23',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  text: {
    color: 'white',
    fontSize: 17,
    marginBottom: 14,
    textAlign: 'center',
  },
  list: {
    color: '#e0e0e0',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 4,
    paddingLeft: 8,
  },
  footer: {
    marginTop: 30,
    color: '#c0c0c0',
    fontSize: 13,
    fontStyle: 'italic',
    letterSpacing: 1,
  },
});