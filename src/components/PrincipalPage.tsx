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
          title="Presionamsss"
          onPress={() => Alert.alert("Esto es un boton")}
        />
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
