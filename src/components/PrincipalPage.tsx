import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export const PrincipalPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Como estas? </Text>
      <View style={{ width: 104, margin: "auto" }}>
        <Button
          title="Presioname"
          onPress={() => Alert.alert("Esto es un boton")}
        />
      </View>
      <Text style={styles.describe}>
        Esto es lo que se va hasta ahora, todavia esta en progreso.
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  titulo: {
    textAlign: "center",
    paddingTop: Constants.statusBarHeight + 20,
  },
  describe: {
    width: 120,
    textAlign: "center",
    margin: "auto",
    marginTop: -250,
  },
});
