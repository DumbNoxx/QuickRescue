import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

export const PrincipalPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function alert(_arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Como estas? </Text>
      <View style={{ width: 104, margin: "auto" }}>
        <Button title="Presioname" onPress={() => alert("Esto es un boton")} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titulo: {
    textAlign: "center",
    paddingTop: Constants.statusBarHeight + 20,
  },
});
