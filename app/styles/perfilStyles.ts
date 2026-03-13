import { StyleSheet } from 'react-native';

// ─── ESTILOS ESPECÍFICOS DA TELA DE PERFIL ────────────────────────────────────
// Estilos exclusivos da tela perfil.tsx — não são reutilizados em outras telas.
export default StyleSheet.create({
  // ScrollView content: centraliza filhos no eixo vertical e horizontal
  // justifyContent aqui organiza os blocos verticalmente com espaçamento
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    gap: 24, // espaçamento entre seções principais
  },

  // Container do avatar — centraliza a foto horizontalmente
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 8,
  },

  // Imagem de perfil circular
  // borderRadius: 75 = metade de width/height (150) → círculo perfeito
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#007AFF',
  },

  // Botão "Trocar Foto" — menor, sem fundo, apenas texto colorido
  trocaFotoBtn: {
    marginTop: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },

  trocaFotoBtnTexto: {
    color: '#007AFF',
    fontSize: 14,
    fontWeight: '500',
  },

  // Container do formulário — largura total, gap entre campos
  // gap: 16 → espaçamento igual entre cada TextInput
  formContainer: {
    width: '100%',
    gap: 16,
  },

  // Rótulo acima de cada campo
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6E6E73',
    marginBottom: -8, // aproxima o label do input
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  // Área de bio — altura mínima para multiline
  bioInput: {
    minHeight: 100,
  },

  // Seção de título da tela
  headerContainer: {
    alignItems: 'center',
    gap: 4,
  },
});
