import { useState, useEffect } from "react";
import {
  View,
  Text,
  Switch,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";

// ─── Notícias do painel de elevador ───────────────────────────────────────
const NOTICIAS = [
  {
    id: 1,
    icon: "📢",
    titulo: "Anúncio: Campanha de Verão",
    descricao: "Nova propaganda carregada no Painel Elevador 3.",
    tempo: "Há 5 min",
  },
  {
    id: 2,
    icon: "🌤",
    titulo: "Notícias Locais e Clima",
    descricao: "Previsão do tempo local atualizada nos Elevadores A e B.",
    tempo: "Há 15 min",
  },
  {
    id: 3,
    icon: "📰",
    titulo: "Manchetes do Dia",
    descricao: "Notícias locais e trânsito atualizados no Painel 1.",
    tempo: "Há 30 min",
  },
  {
    id: 4,
    icon: "📅",
    titulo: "Eventos do Prédio",
    descricao: "Agenda semanal de eventos sincronizada no Painel D.",
    tempo: "Há 1 h",
  },
  {
    id: 5,
    icon: "💬",
    titulo: "Mensagens do Horário",
    descricao: "Avisos de horário de funcionamento atualizados.",
    tempo: "Há 2 h",
  },
  {
    id: 6,
    icon: "🔧",
    titulo: "Manutenção Programada",
    descricao: "Elevador B em manutenção preventiva amanhã às 8h.",
    tempo: "Há 3 h",
  },
  {
    id: 7,
    icon: "🅿️",
    titulo: "Vagas no Subsolo",
    descricao: "3 vagas disponíveis no estacionamento subsolo.",
    tempo: "Há 4 h",
  },
];

export default function AtualizacaoScreen() {
  // ─── Estado do tema (claro/escuro) ────────────────────────────────────
  const [darkMode, setDarkMode] = useState(true); // começa no escuro como na imagem

  // ─── Estado do progresso OTA (1 a 5) ─────────────────────────────────
  const [otaProgress, setOtaProgress] = useState(1);
  const [otaCompleto, setOtaCompleto] = useState(false);

  // ─── Simula progresso OTA a cada 3 segundos via useEffect ─────────────
  // O useEffect com [] roda apenas na montagem. O cleanup evita memory leak.
  useEffect(() => {
    const interval = setInterval(() => {
      setOtaProgress((prev) => {
        if (prev >= 5) {
          clearInterval(interval);
          setOtaCompleto(true);
          return 5;
        }
        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // ─── Cores do tema ────────────────────────────────────────────────────
  const cores = darkMode ? CORES_ESCURO : CORES_CLARO;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: cores.fundo }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />

      {/* ── HEADER: toggle de modo escuro ─────────────────────────────── */}
      <View style={styles.headerSwitch}>
        <Text style={[styles.switchLabel, { color: cores.textoSecundario }]}>
          {darkMode ? "🌙" : "☀️"}  Modo {darkMode ? "Escuro" : "Claro"}
        </Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: "#555", true: "#34C759" }}
          thumbColor="#ffffff"
        />
      </View>

      {/* ── TÍTULO PRINCIPAL ──────────────────────────────────────────── */}
      <View style={styles.tituloContainer}>
        <Text style={[styles.titulo, { color: cores.texto }]}>
          Atualização em{"\n"}Andamento
        </Text>
        <Text style={[styles.subtitulo, { color: cores.textoSecundario }]}>
          Status do Painel de Elevador
        </Text>
      </View>

      {/* ── LISTA DE NOTÍCIAS ─────────────────────────────────────────── */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {NOTICIAS.map((noticia) => (
          <View
            key={noticia.id}
            style={[styles.card, { backgroundColor: cores.card, borderColor: cores.cardBorda }]}
          >
            {/* Ícone circular */}
            <View style={[styles.cardIcone, { backgroundColor: cores.iconesFundo }]}>
              <Text style={styles.cardIconeTexto}>{noticia.icon}</Text>
            </View>

            {/* Textos da notícia */}
            <View style={styles.cardTextos}>
              <View style={styles.cardLinhaTopo}>
                <Text style={[styles.cardTitulo, { color: cores.texto }]} numberOfLines={1}>
                  {noticia.titulo}
                </Text>
                <Text style={[styles.cardTempo, { color: cores.textoTerceiro }]}>
                  {noticia.tempo}
                </Text>
              </View>
              <Text style={[styles.cardDescricao, { color: cores.textoSecundario }]} numberOfLines={2}>
                {noticia.descricao}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* ── FOOTER: progresso OTA ─────────────────────────────────────── */}
      <View style={[styles.footer, { borderTopColor: cores.cardBorda }]}>
        {otaCompleto ? (
          <Text style={[styles.footerCompleto, { color: "#34C759" }]}>
            ✅ Atualização concluída!
          </Text>
        ) : (
          <>
            <ActivityIndicator
              size="large"
              color={darkMode ? "#4da6ff" : "#0369a1"}
            />
            <Text style={[styles.footerTexto, { color: cores.textoSecundario }]}>
              Carregando...
            </Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

// ─── ESTILOS ESTÁTICOS ────────────────────────────────────────────────────
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Header do Switch
  headerSwitch: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
    gap: 8,
  },
  switchLabel: {
    fontSize: 14,
    fontWeight: "500",
  },
  // Título
  tituloContainer: {
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    lineHeight: 40,
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  // ScrollView
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    gap: 10,
  },
  // Card de notícia
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    padding: 14,
    borderWidth: 0.5,
    gap: 12,
  },
  cardIcone: {
    width: 48,
    height: 48,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  cardIconeTexto: {
    fontSize: 22,
  },
  cardTextos: {
    flex: 1,
  },
  cardLinhaTopo: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 4,
    gap: 8,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: "700",
    flex: 1,
  },
  cardTempo: {
    fontSize: 11,
    fontWeight: "400",
    flexShrink: 0,
  },
  cardDescricao: {
    fontSize: 13,
    lineHeight: 18,
  },
  // Footer
  footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
    borderTopWidth: 0.5,
    gap: 8,
  },
  footerTexto: {
    fontSize: 14,
  },
  footerCompleto: {
    fontSize: 16,
    fontWeight: "700",
  },
});

// ─── PALETA TEMA ESCURO (padrão da imagem) ────────────────────────────────
const CORES_ESCURO = {
  fundo: "#000000",
  card: "#1c1c1e",
  cardBorda: "#2c2c2e",
  iconesFundo: "#2c2c2e",
  texto: "#ffffff",
  textoSecundario: "#8e8e93",
  textoTerceiro: "#636366",
};

// ─── PALETA TEMA CLARO ────────────────────────────────────────────────────
const CORES_CLARO = {
  fundo: "#f2f2f7",
  card: "#ffffff",
  cardBorda: "#e5e5ea",
  iconesFundo: "#f2f2f7",
  texto: "#000000",
  textoSecundario: "#6e6e73",
  textoTerceiro: "#aeaeb2",
};
