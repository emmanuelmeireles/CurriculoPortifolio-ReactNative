import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// --- Funções Auxiliares (mantidas como Pure Functions) ---

/**
 * Gera uma senha secreta de 4 dígitos únicos.
 * @returns {string} A senha secreta.
 */
function generateSecret() {
  const digits = [];
  while (digits.length < 4) {
    const d = Math.floor(Math.random() * 10).toString();
    if (!digits.includes(d)) {
      digits.push(d);
    }
  }
  return digits.join('');
}

/**
 * Compara o palpite com a senha secreta e retorna o número de "Bulls" e "Cows".
 * @param {string} secret - A senha secreta.
 * @param {string} guess - O palpite do jogador.
 * @returns {{bulls: number, cows: number}} O resultado da comparação.
 */
function getResult(secret, guess) {
  let bulls = 0;
  let cows = 0;
  for (let i = 0; i < 4; i++) {
    if (guess[i] === secret[i]) {
      bulls++;
    } else if (secret.includes(guess[i])) {
      cows++;
    }
  }
  return { bulls, cows };
}

// --- Componente Principal do Jogo ---

export default function JogoSenha() { // Renomeado para JogoSenha para corresponder ao nome do arquivo
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setSecret(generateSecret());
  }, []);

  /**
   * Lida com o envio de um palpite.
   */
  const handleGuess = () => {
    if (guess.length !== 4 || new Set(guess).size !== 4) {
      Alert.alert('Entrada Inválida', 'Por favor, digite 4 dígitos diferentes.');
      return;
    }

    const result = getResult(secret, guess);
    const entry = { guess, ...result };
    const newHistory = [entry, ...history];
    setHistory(newHistory);
    setGuess('');

    if (result.bulls === 4) {
      setFinished(true);
      Alert.alert('🎉 Parabéns! 🎉', `Você acertou a senha em ${newHistory.length} tentativas!`, [{ text: 'Jogar Novamente', onPress: handleRestart }]);
    } else if (newHistory.length >= 10) {
      setFinished(true);
      Alert.alert('😔 Fim de Jogo 😔', `Você atingiu o limite de 10 tentativas. A senha era: ${secret}`, [{ text: 'Jogar Novamente', onPress: handleRestart }]);
    }
  };

  /**
   * Exibe a senha secreta.
   */
  const handleShowSecret = () => {
    Alert.alert('🤫 Senha Secreta 🤫', `A senha atual é: ${secret}`);
  };

  /**
   * Reinicia o jogo.
   */
  const handleRestart = () => {
    setSecret(generateSecret());
    setHistory([]);
    setGuess('');
    setFinished(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.gameTitle}>Jogo da Senha</Text>
      <Text style={styles.subtitle}>Adivinhe os 4 dígitos únicos!</Text>

      <TouchableOpacity style={styles.showSecretButton} onPress={handleShowSecret}>
        <Text style={styles.showSecretButtonText}>Ver Senha (Dica!)</Text>
      </TouchableOpacity>

      {!finished ? (
        <>
          <TextInput
            style={styles.input}
            value={guess}
            onChangeText={text => setGuess(text.replace(/[^0-9]/g, ''))}
            keyboardType="number-pad"
            maxLength={4}
            placeholder="Seu palpite (4 dígitos)"
            placeholderTextColor="#999"
            editable={!finished}
          />
          <TouchableOpacity
            style={[styles.actionButton, styles.guessButton]}
            onPress={handleGuess}
            disabled={guess.length !== 4}
          >
            <Text style={styles.actionButtonText}>Tentar!</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={[styles.actionButton, styles.restartButton]} onPress={handleRestart}>
          <Text style={styles.actionButtonText}>Jogar Novamente</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.historyHeader}>Histórico de Tentativas ({history.length}/10)</Text>
      <FlatList
        data={history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.historyItem}>
            <Text style={styles.historyAttemptText}>Tentativa {history.length - index}:</Text>
            <Text style={styles.historyGuessText}>{item.guess}</Text>
            <Text style={styles.historyResultText}>
              • {item.bulls} Bulls, {item.cows} Cows
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyHistoryText}>
            Nenhuma tentativa ainda. Digite sua primeira senha!
          </Text>
        }
        style={styles.historyList}
        contentContainerStyle={styles.historyListContent}
      />

      {finished && (
        <Text style={styles.gameResultText}>
          {history[0]?.bulls === 4
            ? '🏆 Você Venceu! 🏆'
            : `Game Over! A senha correta era: ${secret}`}
        </Text>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  gameTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.05)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  subtitle: {
    fontSize: 16,
    color: '#7F8C8D',
    marginBottom: 25,
  },
  showSecretButton: {
    backgroundColor: '#FF7F50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  showSecretButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#BDC3C7',
    borderRadius: 15,
    padding: 15,
    width: '70%',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
  },
  actionButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    width: '70%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  guessButton: {
    backgroundColor: '#2ECC71',
  },
  restartButton: {
    backgroundColor: '#3498DB',
  },
  actionButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E',
    marginTop: 10,
    marginBottom: 10,
  },
  historyList: {
    width: '90%',
    flexGrow: 1,
    marginBottom: 20,
  },
  historyListContent: {
    alignItems: 'center',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ECF0F1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  historyAttemptText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2C3E50',
    flex: 0.4,
  },
  historyGuessText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#27AE60',
    flex: 0.3,
    textAlign: 'center',
  },
  historyResultText: {
    fontSize: 15,
    color: '#E67E22',
    flex: 0.5,
    textAlign: 'right',
  },
  emptyHistoryText: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    marginTop: 20,
    fontStyle: 'italic',
  },
  gameResultText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2980B9',
  },
});