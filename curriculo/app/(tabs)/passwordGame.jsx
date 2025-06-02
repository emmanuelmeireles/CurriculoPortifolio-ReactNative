import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';

// Função para gerar uma senha aleatória de 4 dígitos únicos
function generatePassword() {
  let digits = [];
  while (digits.length < 4) {
    const n = Math.floor(Math.random() * 10);
    if (!digits.includes(n)) digits.push(n);
  }
  return digits.join('');
}

// Função para calcular Bulls and Cows
function getBullsAndCows(password, guess) {
  let bulls = 0, cows = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === password[i]) {
      bulls++;
    } else if (password.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

export default function PasswordGame() {
  const [password, setPassword] = useState(generatePassword());
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    if (input.length !== 4 || new Set(input).size !== 4 || !/^\d{4}$/.test(input)) {
      Alert.alert('Atenção', 'Digite uma senha de 4 dígitos únicos.');
      return;
    }
    const { bulls, cows } = getBullsAndCows(password, input);
    const newAttempt = { guess: input, bulls, cows };
    const newAttempts = [newAttempt, ...attempts];
    setAttempts(newAttempts);

    if (bulls === 4) {
      setGameOver(true);
      setMessage('Parabéns! Você acertou a senha!');
    } else if (newAttempts.length === 10) {
      setGameOver(true);
      setMessage(`Fim de jogo! A senha era ${password}.`);
    }
    setInput('');
  };

  const handleShowPassword = () => {
    Alert.alert('Senha Secreta', `A senha é: ${password}`);
  };

  const handleRestart = () => {
    setPassword(generatePassword());
    setAttempts([]);
    setInput('');
    setGameOver(false);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Senha (Bulls and Cows)</Text>
      <TouchableOpacity style={styles.revealButton} onPress={handleShowPassword}>
        <Text style={styles.revealButtonText}>Mostrar senha secreta</Text>
      </TouchableOpacity>

      {!gameOver && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Digite 4 dígitos únicos"
            keyboardType="numeric"
            maxLength={4}
            editable={!gameOver}
          />
          <Button title="Tentar" onPress={handleGuess} disabled={gameOver} />
        </View>
      )}

      <FlatList
        data={attempts}
        keyExtractor={(_, idx) => idx.toString()}
        inverted
        style={styles.attemptsList}
        renderItem={({ item, index }) => (
          <View style={styles.attemptItem}>
            <Text style={styles.attemptText}>
              #{attempts.length - index}: {item.guess} - {item.bulls} Bulls, {item.cows} Cows
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Nenhuma tentativa ainda.</Text>}
      />

      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>{message}</Text>
          <Button title="Jogar Novamente" onPress={handleRestart} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#63783d',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    gap: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 8,
    fontSize: 18,
    width: 160,
    marginRight: 8,
  },
  attemptsList: {
    width: '100%',
    marginTop: 8,
    marginBottom: 16,
  },
  attemptItem: {
    backgroundColor: '#405a23',
    padding: 10,
    borderRadius: 6,
    marginBottom: 6,
  },
  attemptText: {
    color: 'white',
    fontSize: 16,
  },
  emptyText: {
    color: 'white',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 16,
  },
  revealButton: {
    backgroundColor: '#405a23',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  revealButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  gameOverContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  gameOverText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
});