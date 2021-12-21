import { ScrollView, StyleSheet, View } from "react-native";

export default function Layout({ children }) {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#1E1E1E",
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    width: 350,
  },
});
