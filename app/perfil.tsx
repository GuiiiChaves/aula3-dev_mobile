import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import globalStyles from './styles/globalStyles';
import perfilStyles from './styles/perfilStyles';

const AVATARES = [
  'https://i.pravatar.cc/300?img=1',
  'https://i.pravatar.cc/300?img=5',
];

export default function PerfilScreen() {
  const [nome, setNome] = useState('');
  const [bio, setBio] = useState('');
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [nomeFocado, setNomeFocado] = useState(false);
  const [bioFocado, setBioFocado] = useState(false);

  function trocarFoto() {
    setAvatarIndex((prev) => (prev + 1) % AVATARES.length);
  }

  function salvarPerfil() {
    if (nome.trim() === '') {
      Alert.alert('Atenção', 'Por favor, digite seu nome.');
      return;
    }
    Alert.alert('Perfil Salvo!', `Nome: ${nome}`);
  }

  return (
    // SafeAreaView com flex: 1 → ocupa toda a tela respeitando notch e barra de status
    <SafeAreaView style={globalStyles.container}>
      {/*
       * ScrollView com contentContainerStyle:
       * alignItems: 'center' centraliza filhos no eixo horizontal
       * gap: 24 distribui espaço uniforme entre as seções
       */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={perfilStyles.scrollContent}
      >
        <View style={perfilStyles.headerContainer}>
          <Text style={globalStyles.title}>Perfil Rápido</Text>
          <Text style={globalStyles.subtitle}>Aula 4 — Flexbox & Inputs</Text>
        </View>

        <View style={perfilStyles.avatarContainer}>
          {/* borderRadius: 75 = metade de 150 → círculo perfeito */}
          <Image
            source={{ uri: AVATARES[avatarIndex] }}
            style={perfilStyles.avatar}
            resizeMode="cover"
          />
          <TouchableOpacity style={perfilStyles.trocaFotoBtn} onPress={trocarFoto}>
            <Text style={perfilStyles.trocaFotoBtnTexto}>Trocar Foto</Text>
          </TouchableOpacity>
        </View>

        {/* formContainer com gap: 16 → espaçamento uniforme entre campos */}
        <View style={perfilStyles.formContainer}>
          <Text style={perfilStyles.label}>Nome</Text>
          <TextInput
            style={[
              globalStyles.input,
              { borderColor: nomeFocado ? '#007AFF' : '#CBD5E1' },
            ]}
            placeholder="Digite seu nome"
            placeholderTextColor="#A0AEC0"
            value={nome}
            onChangeText={setNome}
            onFocus={() => setNomeFocado(true)}
            onBlur={() => setNomeFocado(false)}
            returnKeyType="next"
          />

          <Text style={perfilStyles.label}>Bio</Text>
          <TextInput
            style={[
              globalStyles.input,
              perfilStyles.bioInput,
              { borderColor: bioFocado ? '#007AFF' : '#CBD5E1' },
            ]}
            placeholder="Escreva uma bio curta..."
            placeholderTextColor="#A0AEC0"
            value={bio}
            onChangeText={setBio}
            onFocus={() => setBioFocado(true)}
            onBlur={() => setBioFocado(false)}
            multiline={true}
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity style={globalStyles.button} onPress={salvarPerfil}>
          <Text style={globalStyles.buttonText}>Salvar Perfil</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
