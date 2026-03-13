# 📱 Atualização em Andamento — Aula 3

App React Native desenvolvido na Aula 3 de Desenvolvimento Mobile (2026.1).

## 🎯 O que esse app demonstra
- **Core Components**: `View`, `Text`, `Switch`, `ScrollView`, `ActivityIndicator`, `SafeAreaView`
- **useState**: gerenciamento de tema claro/escuro e progresso OTA
- **useEffect + setInterval**: simula progresso automático de atualização OTA
- **StyleSheet**: dois temas completos (escuro e claro) sem bibliotecas externas

## 🚀 Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o projeto
```bash
npx expo start        # abre o QR code para Expo Go
npm run web           # abre no navegador
npm run android       # abre no emulador Android
npm run ios           # abre no simulador iOS (Mac only)
```

> **Atenção**: O Expo Go na App Store só suporta até Expo SDK 54.
> Ao criar um novo projeto, use: `npx create-expo-app@latest --template default@sdk-54`

## 📁 Estrutura
```
atualizacao-app/
├── app/
│   └── index.tsx     ← tela principal (todo o código aqui)
├── assets/           ← ícones e splash screen
├── app.json          ← configuração do Expo
├── package.json      ← dependências
├── tsconfig.json     ← configuração TypeScript
└── babel.config.js   ← configuração Babel
```

## 🔄 Funcionalidades
| Funcionalidade | Implementação |
|---|---|
| Toggle tema | `useState(true)` — começa escuro |
| Lista de notícias | `ScrollView` com 7 cards |
| Progresso OTA | `useEffect` + `setInterval` a cada 3s |
| Indicador de loading | `ActivityIndicator` no footer |
| Tema completo | Dois objetos de cores `CORES_ESCURO` / `CORES_CLARO` |

## 📚 Referências — Aula 3
- [Core Components - React Native](https://reactnative.dev/docs/intro-react-native-components)
- [Switch - React Native](https://reactnative.dev/docs/switch)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- [OTA Updates](https://docs.expo.dev/deploy/send-over-the-air-updates/)
