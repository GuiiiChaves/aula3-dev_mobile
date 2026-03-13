import { StyleSheet } from 'react-native';

// ─── ESTILOS GLOBAIS REUTILIZÁVEIS ────────────────────────────────────────────
// Estes estilos são compartilhados entre várias telas do app.
// Importar com: import globalStyles from '../styles/globalStyles';
export default StyleSheet.create({
  // flex: 1 → o container ocupa TODO o espaço disponível na tela
  // backgroundColor → fundo padrão iOS (cinza claro #F2F2F7)
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    padding: 20,
  },

  // Título principal — centralizado, peso bold
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1C1C1E',
    textAlign: 'center',
  },

  // Subtítulo — menor, cor secundária
  subtitle: {
    fontSize: 16,
    color: '#6E6E73',
    textAlign: 'center',
  },

  // Botão primário — largura total, fundo azul iOS
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },

  // Texto dentro do botão primário
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Input padrão — borda cinza, fundo branco
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
  },

  // Estado focado do input — borda azul iOS
  inputFocused: {
    borderColor: '#007AFF',
  },
});
