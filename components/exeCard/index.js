import { StyleSheet, Text, View } from "react-native";

export default function ExeCard({ name, kcal, level, score }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.exeName}>{name}</Text>
      <View style={styles.inforWrap}>
        <Text style={styles.infor}>
          칼로리 <Text style={{ color: "#92FFFB" }}>{kcal}kcal</Text>
        </Text>
        <Text style={[styles.infor, styles.marginLeft]}>
          난이도{" "}
          {score > 8 ? (
            <Text style={{ color: "#FF5A76" }}>{level}</Text>
          ) : score > 5 ? (
            <Text style={{ color: "#FF98EE" }}>{level}</Text>
          ) : score > 2 ? (
            <Text style={{ color: "#98FFC8" }}>{level}</Text>
          ) : (
            <Text style={{ color: "#F5FF98" }}>{level}</Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#2D3239",
    marginTop: 20,
  },
  exeName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  inforWrap: {
    flexDirection: "row",
    marginTop: 10,
  },
  infor: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
  marginLeft: {
    marginLeft: 15,
  },
});
