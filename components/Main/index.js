import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ExeCard from "../exeCard";
import { ExeData } from "./../../data/exeData";
import Layout from "../layout";

export default function Main({ navigation }) {
  return (
    <Layout>
      <View>
        <Text style={styles.logo}>
          BREAK <Text style={styles.health}>HEALTH</Text>
        </Text>
        <Text style={styles.description}>오늘의 운동 루틴을 맞이하라</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("RESULT")}
        >
          <Text style={styles.buttonText}>오늘의 루틴 보기</Text>
        </TouchableOpacity>
        <Text style={styles.alertMsg}>주의사항 *</Text>
        <Text style={styles.alertDes}>
          어떠한 루틴이 나와도 절대 피하지 말것!
        </Text>
        <Text style={styles.exeListText}>운동 목록</Text>
        {ExeData.slice(0, 3).map((exe, index) => (
          <ExeCard exe={exe} key={index} />
        ))}
        <TouchableOpacity
          style={styles.more}
          onPress={() => navigation.navigate("EXELIST")}
        >
          <Text style={styles.moreText}>전체 보기</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
  },
  health: {
    color: "red",
  },
  description: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#2785FF",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  alertMsg: {
    marginTop: 17,
    color: "#FF4646",
    fontSize: 17,
    fontWeight: "bold",
  },
  alertDes: {
    marginTop: 5,
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  exeListText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    color: "white",
  },
  more: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
    backgroundColor: "#323A44",
    paddingVertical: 10,
    borderRadius: 5,
  },
  moreText: {
    color: "#85DEFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});
