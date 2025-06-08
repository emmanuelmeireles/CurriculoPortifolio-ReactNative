import { Stack } from "expo-router";
import { StyleSheet } from 'react-native';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTintColor: '#FFFFFF', // Cor do texto e ícones do cabeçalho (branco)
        headerTitleStyle: styles.headerTitleStyle, // Estilo do título do cabeçalho
        headerShadowVisible: true, // Adiciona sombra ao cabeçalho para profundidade
        headerStatusBarHeight: 0, // Ajusta a altura da barra de status (se necessário)
      }}
    >
      {/* Rota da Homepage */}
      <Stack.Screen
        name="index" // Mapeia para app/index.tsx
        options={{
          title: "Meu Portfólio", // Título que aparece no cabeçalho
        }}
      />

      {/* Rotas das Páginas dentro de app/pages */}
      <Stack.Screen
        name="pages/ExperienciaAcademica" // Mapeia para app/pages/ExperienciaAcademica.jsx
        options={{
          title: "Experiência Acadêmica",
        }}
      />
      <Stack.Screen
        name="pages/ExperienciaProfissional" // Mapeia para app/pages/ExperienciaProfissional.jsx
        options={{
          title: "Experiência Profissional",
        }}
      />
      <Stack.Screen
        name="pages/JogoSenha" // Mapeia para app/pages/JogoSenha.jsx
        options={{
          title: "Jogo da Senha", // Mudado para ser mais amigável
        }}
      />
      <Stack.Screen
        name="pages/Projetos" // Mapeia para app/pages/Projetos.jsx
        options={{
          title: "Meus Projetos", // Título mais descritivo
        }}
      />
      <Stack.Screen
        name="pages/Sobre" // Mapeia para app/pages/Sobre.jsx
        options={{
          title: "Sobre o App", // Título mais descritivo
        }}
      />

      {/*
        Exemplo de rota dinâmica (como user/[id]).
        Se você não tiver essa rota, pode remover ou comentá-la.
        Ela mapearia para app/user/[id].tsx
      */}
      <Stack.Screen
        name="user/[id]"
        options={{
          title: "Detalhes do Usuário", // Título mais claro
          headerBackTitleVisible: false, // Opcional: esconde o "Voltar" no iOS para ser mais limpo
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#007BFF', // Azul vibrante para o cabeçalho
    height: 90, // Altura um pouco maior para o cabeçalho
    borderBottomWidth: 0, // Remove a borda inferior padrão
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8, // Sombra para Android
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF', // Garante que o título seja branco
  },
});