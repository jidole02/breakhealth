import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Layout({ children }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: 350,
  },
});
